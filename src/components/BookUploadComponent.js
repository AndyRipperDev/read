import React from "react";
import {Button, Label, Message} from "semantic-ui-react";
import {connect} from "react-redux";
import {addBooks} from "../redux/actionCreators";
import book from "../book";
import chapter from "../chapter";

const mapDispatchToProps = dispatch => ({
  addBooks: books => dispatch(addBooks(books))
});

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

class BookUploadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  handleFormChange = event => {
    let files = event.target.files;
    const JSZip = require("jszip");
    const zip = new JSZip();
    let books = [];
    let addBookCallback = this.props.addBooks;

    handleFormChange = (event) => {
        let files = event.target.files;
        let addBooksCallback = this.props.addBooks;
        let books = []
        let bookCount = files.length
        const JSZip = require("jszip");
        const zip = new JSZip();
        for(let f of files)
        {
            JSZip.loadAsync(f)
                .then(function (zip) {
                    zip.forEach((relativePath, zipEntry) => {
                        let filename = relativePath.replace(/^.*[\\\/]/, '');
                        if (filename == "content.opf") {
                            zipEntry.async("text").then((text) => {

                                let contentFileParser = new DOMParser().parseFromString(text, "text/xml");
                                let filePromises = []
                                let chapters = []
                                let images = {}
                                let stylesheets = []
                                let spineIdrefs = []
                                for (let spineElement of contentFileParser.getElementsByTagName("spine")[0].children)
                                {
                                    spineIdrefs.push(spineElement.getAttribute("idref"))
                                }
                                for (let manifestElement of contentFileParser.getElementsByTagName("manifest")[0].children) {
                                    let filePath = manifestElement.getAttribute("href")
                                    let fileName = filePath.replace(/^.*[\\\/]/, '');
                                    let extension = filePath.replace(/^.*[\\\/]/, '');
                                    switch(manifestElement.getAttribute("media-type"))
                                    {
                                        case 'image/jpeg':
                                            filePromises.push(zip.file(filePath).async("base64").then((val)=>{images[fileName] = {"image": val, "extension": extension}}))
                                            break;
                                        case 'application/xhtml+xml':
                                            let id = manifestElement.getAttribute("id")
                                            let chapterIndex = spineIdrefs.indexOf(id);
                                            filePromises.push(zip.file(filePath).async("text").then((val)=>{chapters[chapterIndex]=new chapter(val)}))
                                            break;
                                        case 'text/css':
                                            filePromises.push(zip.file(filePath).async("text").then((val)=>{stylesheets.push(val)}))
                                            break;

                                    }
                                }
                                let bookPromise = Promise.all(filePromises).then(()=>{
                                    books.push(new book(chapters,images,stylesheets))
                                    bookCount--;
                                    if(bookCount==0)
                                    {
                                        console.log(stylesheets)
                                        addBooksCallback(books);
                                    }
                                })

                            })

                        }
                    })
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookUploadComponent);
