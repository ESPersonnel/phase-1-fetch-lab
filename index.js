function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => renderBooks(data))
}

function renderBooks(books) {
  books.forEach((book) => {
    const bookTitle = document.createElement("h2");
    bookTitle.innerHTML = book.name;
    document.querySelector("main").appendChild(bookTitle);
  });
}