import React from "react";
class chapter
{
    constructor(text)
    {
        this.content = new DOMParser().parseFromString(text,"text/xml");

    }

    get bodyHtml()
    {
        let root = this.content.getElementsByTagName("html")[0];
        let body = root.getElementsByTagName("body")[0];
        return body.innerHTML;
    }

    get imageNodes()
    {
        return this.content.getElementsByTagName("img");
    }
}

export default chapter;