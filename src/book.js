class book
{
    constructor(chapters, images)
    {
        this.chapters = chapters;
        this.images = images
        for(let chapter of this.chapters)
        {
            let imageNodes = chapter.imageNodes
            for(let imageNode of imageNodes)
            {
                var filename = imageNode.src.replace(/^.*[\\\/]/, '')
                let image = this.images[filename]
                imageNode.src = "data:image/"+image.extension+";base64,"+image.image
                console.log(imageNode)
            }
        }
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