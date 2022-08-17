import axios from "axios";
import React, { useState } from "react";
import NoteForm from "./NoteForm";

const AddNote = (props) => {
    const {addNoteItem} = props
    const [isSaved,setIssaved] = useState(false)

    const formSubmit = (data) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',data,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response) => {
            addNoteItem(response.data)
            setIssaved(true)
        })
        .catch((err) => {alert(err.message)})
    }

    const toggleIsSaved =() => {
        setIssaved(false)
    }

    return(
        <div>
            <NoteForm formSubmit={formSubmit} isSaved={isSaved} toggleIsSaved={toggleIsSaved}/>
        </div>
    )
}

export default AddNote