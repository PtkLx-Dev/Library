function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function () {
		console.log(
			`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
		);
	};
}
myBook = new Book();
myBook.title = 'The Hobbit';
myBook.author = 'J.R.R. Tolkien';
myBook.pages = 295;
myBook.read = 'not read';

myBook.info();

function addBookToLibrary() {}
