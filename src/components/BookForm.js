import React from "react";
import {Button, Label, Message} from "semantic-ui-react";
export class BookForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: undefined};
    }

    handleFormChange (event)
    {
        var JSZip = require("jszip");
        var zip = new JSZip();
        console.log(event.target.files);
    }

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