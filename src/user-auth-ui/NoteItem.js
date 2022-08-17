import axios from 'axios'
import React, { useState } from 'react'
import EditNote from './EditNote'
import Swal from 'sweetalert2'

const NoteItem = (props) => {
    const {_id,title,body,removeItem,editItem} = props
    const [toggle,setToggle] = useState(false)

    const handleToggleChange  =(props) => {
        setToggle(!toggle)
    }

    const handleDetails = (props) => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        }).then((response) => {
            Swal.fire(
                `${response.data.title}`,
                `${response.data.body}`
            )
        })
        .catch((err) => {console.log(err.message)})
        
    }

    const handleRemove = (props) => {
        const confirmReamove = window.confirm('Are u sure')
        if(confirmReamove){
            axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
                headers:{
                    'x-auth':localStorage.getItem('token')
                }
            })
                .then((response) => {removeItem(response.data._id)})
                .catch((err) => {console.log(err.message)})
        }
    }

    return(
        <div>
            {
                toggle ? (
                    <div>
                        <EditNote 
                            id={_id}
                            title={title} 
                            body={body}
                            handleToggleChange={handleToggleChange}
                            editItem={editItem}
                        />
                        <button onClick={handleToggleChange}>Cancle</button>
                    </div>
                ) : <div>
                    {
                        <>Title - {title}
                        <button onClick={handleDetails}>View Details</button>
                        <br />
                        </>
                    }
                    <button onClick={handleToggleChange}>Edit</button>
                    <button onClick={handleRemove}>Delete</button>
                </div>
            }
        </div>
    )
}

export default NoteItem