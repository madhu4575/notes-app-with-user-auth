import React from 'react'
import NoteItem from './NoteItem'


const NoteList = (props) => {
    const {notes,removeItem,editItem} = props

    return (
        <div>
            <h1>My Notes</h1>
            {
                notes.length === 0 ? (
                    <h2>No notes found<br />Add your first note</h2>
                ) : (
                    <div>
                        <h1>My Notes - {notes.length}</h1>
                        {
                            notes.map((note) => {
                                return <NoteItem key={note._id} {...note} removeItem={removeItem} editItem={editItem} />
                            })
                        }
                    </div>
                )
                
            }
        </div>
    )
}

export default NoteList