import React from "react";
import {Button, Label, Message} from "semantic-ui-react";
import {connect} from "react-redux";
import {addBooks, postBooks} from "../redux/actionCreators";
import {Redirect} from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    addBooks: (books) => dispatch(addBooks(books)),
    postBooks: (books) => dispatch(postBooks(books))
});


class BookUploadComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: undefined};
    }

    handleFormChange = (event) => {
        let files = event.target.files;
        let books = [];
        let bookCount = files.length;
        const JSZip = require("jszip");
        const fixXMLForRender = (chapters, images) =>{
            let result = [];
            for (let chapter of chapters) {
                let chapterDOM = new DOMParser().parseFromString(chapter, "text/xml").getElementsByTagName("html")[0].getElementsByTagName("body")[0]
                    let imageNodes = chapterDOM.querySelectorAll("image, img");
                    for (let imageNode of imageNodes) {
                        if (imageNode.getAttribute("src")) {
                            const filename = imageNode.src.replace(/^.*[\\\/]/, '');
                            let image = images[filename];
                            imageNode.src = "data:image/" + image.extension + ";base64," + image.image;
                        } else if (imageNode.getAttribute("xlink:href")) {
                            const filename = imageNode.getAttribute("xlink:href").replace(/^.*[\\\/]/, '');
                            let image = images[filename];
                            imageNode.setAttribute("xlink:href", "data:image/" + image.extension + ";base64," + image.image);
                        }
                }
                result.push( chapterDOM.outerHTML.replace(/body/g,"div"))
            }
            return result
        }
        const redirect = ()=>
        {
            this.setState({redirect: true});
        }

        const onBooksRead = () =>
        {
            this.props.postBooks(books)
            redirect()
        }

        for (let f of files) {
            JSZip.loadAsync(f)
                .then(function (zip) {
                    zip.forEach((relativePath, zipEntry) => {
                        let filename = relativePath.replace(/^.*[\\\/]/, '');
                        if (filename == "content.opf") {
                            zipEntry.async("text").then((text) => {

                                let contentFileParser = new DOMParser().parseFromString(text, "text/xml");
                                let filePromises = [];
                                let chapters = [];
                                let images = {};
                                let stylesheets = [];
                                let spineIdrefs = [];
                                for (let spineElement of contentFileParser.getElementsByTagName("spine")[0].children) {
                                    spineIdrefs.push(spineElement.getAttribute("idref"))
                                }
                                for (let manifestElement of contentFileParser.getElementsByTagName("manifest")[0].children) {
                                    let filePath = manifestElement.getAttribute("href");
                                    let fileName = filePath.replace(/^.*[\\\/]/, '');
                                    let extension = filePath.replace(/^.*[\\\/]/, '');
                                    switch (manifestElement.getAttribute("media-type")) {
                                        case 'image/jpeg':
                                            filePromises.push(zip.file(filePath).async("base64").then((val) => {
                                                images[fileName] = {"image": val, "extension": extension}
                                            }));
                                            break;
                                        case 'application/xhtml+xml':
                                            let id = manifestElement.getAttribute("id");
                                            let chapterIndex = spineIdrefs.indexOf(id);
                                            filePromises.push(zip.file(filePath).async("text").then((val) => {
                                                chapters[chapterIndex] = val;
                                            }));
                                            break;
                                        case 'text/css':
                                            filePromises.push(zip.file(filePath).async("text").then((val) => {
                                                stylesheets.push(val)
                                            }));
                                            break

                                    }
                                }

                                Promise.all(filePromises).then( ()=>
                                {
                                    chapters = fixXMLForRender(chapters,images)
                                    books.push({"chapters": chapters, "images": images, "stylesheets": stylesheets});
                                    bookCount--;
                                    if (bookCount == 0) {
                                        onBooksRead()
                                    }
                                })

                            })

                        }
                    })
                })
        }
    };

    render() {
        if (this.state.redirect) {
            return (
                <Redirect
                    push
                    to={{
                        pathname: "/reader",
                        state: {
                            books: this.props.books
                        }
                    }}
                />
            );
        } else if (window.File && window.FileReader && window.FileList && window.Blob) {
            return (
                <Label
                    as="label"
                    basic
                    htmlFor="upload"
                >
                    <Button
                        icon="upload"
                        label={{
                            basic: true,
                            content: 'Select file(s)'
                        }}
                        labelPosition="right"
                    />
                    <input name={"files[]"} onChange={(event) => {
                        this.handleFormChange(event)
                    }}
                           hidden
                           id="upload"
                           multiple
                           type="file"
                    />
                </Label>
            );
        } else {
            return <Message negative>
                <Message.Header>We're sorry, you can't upload your book</Message.Header>
                <p>The File APIs are not fully supported in this browser.</p>
            </Message>
        }
    }
}

export default connect(null, mapDispatchToProps)(BookUploadComponent)