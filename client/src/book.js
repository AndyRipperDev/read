class book
{
    constructor(chapters, images, stylesheets)
    {
        this.chapters = chapters;
        for(let chapter of this.chapters)
        {
            let imageNodes = chapter.imageNodes;
            for(let imageNode of imageNodes)
            {
                if(imageNode.getAttribute("src"))
                {
                    const filename = imageNode.src.replace(/^.*[\\\/]/, '');
                    let image = images[filename];
                    imageNode.src = "data:image/" + image.extension + ";base64," + image.image;
                }
                else if(imageNode.getAttribute("xlink:href"))
                {
                    const filename = imageNode.getAttribute("xlink:href").replace(/^.*[\\\/]/, '');
                    let image = images[filename];
                    imageNode.setAttribute("xlink:href","data:image/" + image.extension + ";base64," + image.image);
                }
            }
        }
        this.stylesheets_ = stylesheets
    }

    get stylesheets() {
        return this.stylesheets_
    }

    getChapter(i)
    {
        return this.chapters[i];
    }

    getImage(path)
    {
        return this.images[path].images[path]
    }

}

export default book;