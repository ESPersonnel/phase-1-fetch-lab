function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => renderBooks(data))
}

// Solution 1:
function renderBooks(books) {
  books.forEach((book) => {
    const bookTitle = document.createElement("h2");
    bookTitle.innerHTML = book.name;
    document.querySelector("main").appendChild(bookTitle);
  });
}

// Solution 2:
// function renderBooks(books) {
//   const main= document.querySelector("main");
//   books.forEach((book) => {
//     const h2 = document.createElement("h2");
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// // DOMContentLoaded
// document.addEventListener("DOMContentLoaded", () => {
//   fetchBooks();
// }
// );