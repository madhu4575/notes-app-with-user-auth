import axios from "axios";
import React from "react";
import NoteForm from "./NoteForm";

const EditNote = (props) => {
    const {title,body,editItem,id,handleToggleChange} = props

    const formSubmit = (data) => {
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,data,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response) => {
            editItem(response.data)
            handleToggleChange()
        })   
        .catch((err) => {console.log(err.message)})
    }

    return(
        <div>
            <NoteForm title={title} body={body} formSubmit={formSubmit} />
        </div>
    )
}

export default EditNote