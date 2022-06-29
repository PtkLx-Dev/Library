function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function () {
		return 'infostring';
		console.log(title);
		console.log(author);
		console.log(pages);
		console.log(read);
		return;
	};
}
test = new Book();

console.log(test.info);
