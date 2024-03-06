import React, { useState } from "react";

function Form(props) {
    const [note,setNote] = useState({
        title: "",
        content: "",
    });

    function handleSubmit(event) {
        props.cb({
            title: note.title,
            content: note.content,
        });
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    };

    function handleChange(event) {
        const {name,value} = event.target;
        setNote((prevState)=>{
            return ({
                ...prevState,
                [name]: value,
            });
        });
    };

    return (
        <div>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
                <textarea type="text" name="content" placeholder="Take a note" value={note.content} rows="5" onChange={handleChange}/>
                <button type="submit">Add</button>
            </form>            
        </div>
    );
}

export default Form;