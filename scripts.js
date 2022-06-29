let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function () {
	console.log(
		`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
	);
};

function NewBook(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

NewBook.prototype = Object.create(Book.prototype);

const myBook = {
	title: 'The Hobbit',
	author: 'J.R.R. Tolkien',
	pages: 295,
	read: 'not read',
};
const book = new NewBook(
	myBook.title,
	myBook.author,
	myBook.pages,
	myBook.read
);
addBookToLibrary(book);
book.info();
console.log(myLibrary);
console.log(book);
