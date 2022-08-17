import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NoteList from './NoteList'
import AddNote from './AddNote'


const NoteContainer = (props) => {

    const [notes,setNotes] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response) => {setNotes(response.data); setIsLoading(false)})
        .catch((err)=> {console.log(err.message)})
    },[])

    const addNoteItem = (note) => {
        setNotes([note,...notes])
    }

    const removeItem = (id) => {
        const result = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(result)
    }

    const editItem = (no) => {
        const result = notes.map((note) => {
            if(note._id === no._id){
                return {...note,...no}
            } else{
                return {...note}
            }
        })
        setNotes(result)
    }

    return(
        <div>
            <h1>User Auth</h1>
            {!isLoading ? <NoteList notes={notes} removeItem={removeItem} editItem={editItem}/> : 'Loading'}
            <AddNote addNoteItem={addNoteItem}/>
        </div>
    )
}

export default NoteContainer