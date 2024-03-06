import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";

function App() {

    const [notes,setNotes] = useState([]);
    console.log(notes);
    
    function handleAddNotes(note) {
      console.log(note);
      setNotes((prevState)=>{
        return [...prevState,note];
      });
    }

    function deleteNote(id) {
      setNotes((prevState)=>{
        return prevState.filter((value,index)=>{ return index!==id;})
      })
    }

    return (
        <div>
            <Header />
            <Footer />
            <Form cb={handleAddNotes}/>
            {notes.map((note,index)=>(
            <Note key={index} id={index} title={note.title} content={note.content} cb={deleteNote}/>
            ))}
        </div>
    );
}

export default App;