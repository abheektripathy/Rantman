/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import { FaArrowLeft } from 'react-icons/fa'



// @ts-ignore
const NotePage = ({match, history}) => {

    let NoteId = match.params.id
    let [note,setNote] =  useState([])

    useEffect(()=>{
      getNote()
    },[NoteId])

    let getNote = async () => {
        let response = await fetch(`/api/notes/${NoteId}/`)
        let data = await response.json()
        // @ts-ignore
        setNote(data)


    // let updateNote = async () => {
    //   fetch(`/api/notes/${NoteId}/update`), {
    //     method: "PUT",
    //     headers: {
    //       'Content-Type' : 'application/json'

    //     },
    //     body: JSON.stringify({...note})
    //   }
      
    //   let handlesubmit = () => {
    //     updateNote()
    //     history.push(`/`)

    //   }

    //   let pushback = () => {

    //     return <a href='`/note/'>
    //       f

    //     </a>
    //   }
     

    // }
   


    
        
 
    }

    let handlesubmit = () => {
      updateNote()
      history.push(`api/note`)

    }

    let updateNote = async () => {
      fetch(`/api/notes/${NoteId}/update`), {
        method: "PUT",
        headers: {
          'Content-Type' : 'application/json'

        },
        body: JSON.stringify({...note})
      }
     

    }

  return (
    <div className='note'>
      <div className='note-header'></div>
      
      <FaArrowLeft onClick={handlesubmit}></FaArrowLeft>
      
      <textarea onChange={(e) => {setNote({...note})}} defaultValue={// @ts-ignore 
      note?.body}>
      </textarea>
    </div>
  )
}

export default NotePage
