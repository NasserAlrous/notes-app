import React, {useState} from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
    
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote, 
                [name] : value
            };
        });
    }

    
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }


    return(
    <div>
        <form className="create-note">
            <input 
                name="title" 
                onChange={handleChange} 
                value={note.title} 
                placeholder="title" />
            <textarea 
                name="content" 
                onChange={handleChange} 
                value={note.content} 
                placeholder="Write your note here..."/>
            <Fab onClick={submitNote}> 
                <NoteAddIcon />
            </Fab>
        </form>
    </div>
    );
}

export default CreateArea;