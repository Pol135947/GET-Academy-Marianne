class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getSummary() {
      return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    getBooks() {
      return this.books.map(book => book.getSummary());
    }
  }
  

  // Create books
  const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
  const book2 = new Book("1984", "George Orwell", 1949);

  app = document.getElementById('app');
  function show(){
    app.innerHTML = `
    
    `
    
  }
  
  function createNewBook(){
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    year = document.getElementById("year").value;
    newBook = new Book(`${title}`, `${author}`, year)
    myLibrary.addBook(newBook)
  }


  // Create library and add books
  const myLibrary = new Library();
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  
  console.log(myLibrary.getBooks());
  // Output:
  // [
  //   "The Hobbit by J.R.R. Tolkien, published in 1937.",
  //   "1984 by George Orwell, published in 1949."
  // ]
  