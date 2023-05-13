import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import ReadingAssistance from "./pages/ReadingAssistance";

// import srv from './fetch_';

const existingBooks = JSON.parse(localStorage.getItem("books")) || [];

//format book data
const declareBooks = (metadata, data) => {
  localStorage.setItem(
    "books",
    JSON.stringify([
      { bookID: metadata.file_hash, book_data: metadata, results: data.result },
    ])
  );
  localStorage.getItem("books");
}

//upload book 
 const upload = (metadata, data) => {
  existingBooks.push({
    bookID: metadata.file_hash,
    book_data: metadata,
    results: data.result,
  });
  localStorage.setItem("books", JSON.stringify(existingBooks));
}

//by id
const getBookById = (id, metadata) => {
  const existingBook = JSON.parse(localStorage.getItem("books")) || []; 

  if (!existingBook) {
    return null;
  }
  const book = existingBook.find((b) => b.bookID === metadata.file_hash);
  if (!book) {
    return null;
  }
  console.log(book.bookID, book);
  return book;
};
   //set text to image
const  text_to_image = (bookID,question, data) => {
    const book = getBookById(bookID);
    if (!book) {
      console.log(`Book with ID '${bookID}' not found in localStorage`);
      return;
    }
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const updatedBooks = books.map((b) => {
      if (b.bookID === bookID) {
        return {...b, textImageHistory:[{questions: question, image_history: data.image_history, text_history: data.text_history}]}
      } else {
        return b;
      }
    });
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  }


  const text_comprehension = (bookID, question, data) => {
    const book = getBookById(bookID);
    if (!book) {
      console.log(`Book with ID '${bookID}' not found in localStorage`);
      return;
    }
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const updatedBooks = books.map((b) => {
      if(b.bookID === data.file_hash) {
        return {...b, textResponse:[{asked: question, textResponse: response}]}
      }else {
        return b
      }
    });
    localStorage.setItem("books", JSON.stringify(updatedBooks))
  }

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Navigation />} />
            <Route path="/assistance" element={<ReadingAssistance />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
