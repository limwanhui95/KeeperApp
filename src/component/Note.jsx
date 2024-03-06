import React from "react";

function Note(props) {
    // console.log(props);
    function handleClick() {
        props.cb(props.id);
    }

    return (
        <div className="note">   
            <h1 className="h1">{props.title}</h1>
            <p className="p">{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}

export default Note;