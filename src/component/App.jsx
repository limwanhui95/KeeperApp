import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


const notes = [
    {
      key: 2,
      title: "Delegation",
      content:
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
    },
    {
      key: 3,
      title: "Loops",
      content:
        "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
    },
    {
      key: 4,
      title: "Arrays",
      content:
        "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
    },
    {
      key: 5,
      title: "Hardware vs. Software",
      content:
        "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    }
  ];



function App() {
    return (
        <div>
            <Header />
            <Footer />
            <Note key="1" title="Testing note" content="This is a test note." />
            {notes.map((item)=>{
                return (<Note key={item.key} title={item.title} content={item.content}/>); 
            })}
        </div>
    );
}

export default App;