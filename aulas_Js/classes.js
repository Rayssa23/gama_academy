class Book{
    constructor (title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    read(){
        return `Estou lendo ${this.tittle}`
    }
}

let book = new Book('O Peregrino', 'John Bunyan', 227);

console.log(book.read());
