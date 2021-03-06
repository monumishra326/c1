import "./App.css";
import { useState } from "react";

function App() {
  const [book, setBook] = useState(13);
  const [pen, setPen] = useState(10);
  const [notebook, setNotebook] = useState(44);
  const [inkpen, setInkpen] = useState(78);

  const bookHandler = (val) => {
    setBook(book + val);
  };
  const penHandler = (val) => {
    setPen(pen + val);
  };
  const notebookHandler = (val) => {
    setNotebook(notebook + val);
  };
  const inkpenHandler = (val) => {
    setInkpen(inkpen + val);
  };

  return (
    <div className="main">
      <div className="items">
        <span>Books:</span>
        <button
          className="addBook"
          onClick={() => {
            bookHandler(1);
          }}
        >
          +
        </button>
        <button
          className="remBook"
          onClick={() => {
            if (book >= 1) {
              bookHandler(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalBooks">{book}</span>
      </div>

      <div className="items">
        <span>Pens:</span>
        <button
          className="addPen"
          onClick={() => {
            penHandler(1);
          }}
        >
          +
        </button>
        <button
          className="remPen"
          onClick={() => {
            if (pen >= 1) {
              penHandler(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalPens">{pen}</span>
      </div>
      <div className="items">
        <span>Notebooks:</span>
        <button
          className="addNotebook"
          onClick={() => {
            notebookHandler(1);
          }}
        >
          +
        </button>
        <button
          className="remNotebook"
          onClick={() => {
            if (notebook >= 1) {
              notebookHandler(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalNotebooks">{notebook}</span>
      </div>

      <div className="items">
        <span>Inkpens:</span>
        <button
          className="addInkpen"
          onClick={() => {
            inkpenHandler(1);
          }}
        >
          +
        </button>
        <button
          className="remInkpen"
          onClick={() => {
            if (inkpen >= 1) {
              inkpenHandler(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalInkpens">{inkpen}</span>
      </div>

      <div className="total">{book + pen + notebook + inkpen}</div>
    </div>
  );
}

export default App;
