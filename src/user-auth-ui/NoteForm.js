import React, { useEffect, useState } from 'react'

const NoteForm = (props) => {
    const {formSubmit,title:editTitle,body:editBody,isSaved,toggleIsSaved} = props
    const [title,setTitle] = useState(editTitle? editTitle : '')
    const [body,setBody] = useState(editBody? editBody : '')

    useEffect(() => {
        if(isSaved){
            setTitle('')
            setBody('')
            toggleIsSaved()
        }
    },[isSaved])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title:title,
            body:body
        }
        formSubmit(formData)
    }

    const handleChange = (e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }else if(e.target.name === 'body'){
            setBody(e.target.value)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={title} 
                    placeholder='Enter a Title' 
                    onChange={handleChange} 
                    name='title'
                /><br />
                <input 
                    type='text' 
                    value={body} 
                    placeholder='Enter a body' 
                    onChange={handleChange} 
                    name='body'
                /><br />
                <input type='submit' value='save' />
            </form>
        </div>
    )
}

export default NoteForm