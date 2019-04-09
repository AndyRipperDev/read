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

    get bodyText()
    {
        let root = this.content.getElementsByTagName("html")[0];
        let body = root.getElementsByTagName("body")[0];
        return body.textContent;
    }

    getLeafTag(i)
    {
        let root = this.content.getElementsByTagName("html")[0];
        const f = (child) =>
        {
            if(child.hasChildNodes())
            {
                f(child)
            }
        }
    }
}

export default chapter;