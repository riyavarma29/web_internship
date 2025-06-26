const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // to parse JSON body

// In-memory storage
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 3, title: "abc", author: "pqr" },
  { id: 4, title: "xyz", author: "def" },
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) a book by id
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = title || book.title;
  book.author = author || book.author;
  res.json(book);
});

// DELETE a book by id
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(book => book.id !== bookId);
  res.json({ message: `Book with ID ${bookId} deleted` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
