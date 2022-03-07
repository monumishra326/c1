
import './App.css';
import { useState } from "react"

function App() {
  const[book,setBook]= useState(23);
  const[pen,setPen]= useState(20);
  const[notebook,setNotebook] = useState(50);
  const[inkpen,setInkpen] = useState(70);

  const bookHandler = (val)=>{
    setBook(book+val);
  };
  const penHandler = (val)=>{
   setPen(pen+val);
  };
  const notebookHandler=(val)=>{
    setNotebook(notebook+val)
  };
  const inkpenHandler=(val)=>{
    setInkpen(inkpen+val)
  };

  return (
    <div className="items">
    <span>Books:</span>
    <button className="addBook" onClick={() =>{
      bookHandler(1);
    }}>
        +
    </button>
    <button className="remBook" onClick={()=>{
      if(book>=1){
        bookHandler(-1);
      }
    }}>
        -
    </button>
    <span className="totalBooks">{book}</span>
    <div className="items">
    <span>Pen:</span>
    <button className="addPen" onClick={() =>{
      penHandler(1);
    }}>
        +
    </button>
    <button className="remPen" onClick={()=>{
      if(pen>=1){
        penHandler(-1);
      }
    }}>
        -
    </button>
    <span className="totalBooks">{pen}</span>
</div>
<div className="items">
    <span>Notebooks:</span>
    <button className="addNotebooks" onClick={() =>{
      notebookHandler(1);
    }}>
        +
    </button>
    <button className="remNotebook" onClick={()=>{
      if(notebook>=1){
        notebookHandler(-1);
      }
    }} >
        -
    </button>
    <span className="totalBooks">{notebook}</span>
</div>
<div className="items">
    <span>Inkpens:</span>
    <button className="inkpen" onClick={() =>{
      inkpenHandler(1);
    }}>
        +
    </button>
    <button className="reminkpen" onClick={()=>{
      if(inkpen>=1){
        inkpenHandler(-1);
      }
    }}>
        -
    </button>
    <span className="totalBooks">1</span>
    <div className="total">{book+pen+notebook+inkpen}</div>
</div>
</div>

  );
}

export default App;
