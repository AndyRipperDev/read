class book
{
    constructor(chapters)
    {
        this.chapters = chapters;
    }

    getChapter(i)
    {
        return this.chapters[i];
    }

}

export default book;