import React from "react";
import {Button, Label, Message} from "semantic-ui-react";
import chapter from "../chapter";
import book from "../book"
import {connect} from "react-redux";
import {addBooks} from "../redux/actionCreators";

const mapDispatchToProps = dispatch => ({
    addBooks: (books) => dispatch(addBooks(books))
});


class BookUploadComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: undefined};
    }

    handleFormChange = (event) => {
        let files = event.target.files;
        const JSZip = require("jszip");
        const zip = new JSZip();
        let books = [];
        let addBookCallback = this.props.addBooks;

        const onFilesProcessed = (book) =>
        {
            console.log(book);
                books.push(book);
                addBookCallback(books);
        };

        for (let i = 0; i < files.length; i++) {
            let f = files[i];
            let chapters = [];
            let stylesheets = [];
            let images = {};
            JSZip.loadAsync(f)
                .then(function (zip) {
                    let numFiles = 0;
                    let zipNames = [];
                    let imageExtensions = ["jpg", "jpeg", "gif", "png"];
                    zip.forEach((relativePath, zipEntry)=>{
                        let extension = relativePath.split('.').pop();
                        if (extension == "xhtml" || extension == "html")
                        {
                            numFiles++;
                            zipNames.push(zipEntry.name)
                        } else if (imageExtensions.includes(extension) || extension == "css")
                        {
                            numFiles++
                        }
                    });
                    console.log(numFiles)
                    let processChapter = (relativePath, zipEntry) => {
                        let extension = relativePath.split('.').pop();
                        let filename = relativePath.replace(/^.*[\\\/]/, '');
                        if (extension == "xhtml" || extension == "html") {
                            zipEntry.async("text").then(
                                (txt) => {
                                    chapters[zipNames.indexOf(zipEntry.name)] = new chapter(txt);
                                    numFiles--;
                                    if (numFiles == 0) {
                                        onFilesProcessed(new book(chapters, images, stylesheets))
                                    }
                                }
                            )
                        } else if (imageExtensions.includes(extension))
                        {
                            zipEntry.async("base64").then((image)=>{
                                images[filename] = {"image": image, "extension": extension};
                                numFiles--;
                                if (numFiles == 0) {
                                    onFilesProcessed(new book(chapters, images, stylesheets))
                                }
                            })
                        } else if (extension == "css") {
                            zipEntry.async("text").then((css) => {
                                numFiles--;
                                stylesheets.push(css);
                                if (numFiles == 0) {
                                    onFilesProcessed(new book(chapters, images, stylesheets))
                                }
                            })
                        }
                        console.log(numFiles)
                    };
                    processChapter = processChapter.bind(this);
                    zip.forEach(processChapter);
                })
        }
    };


    render() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
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