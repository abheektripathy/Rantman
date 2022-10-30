import React,{useState,useEffect} from 'react'



// @ts-ignore
const NotePage = ({match}) => {

    let NoteId = match.params.id
    let [note,setNote] =  useState(null)

    useEffect(()=>{
      getNote()
    },[NoteId])

    let getNote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${NoteId}/`)
        let data = await response.json()
        // @ts-ignore
        setNote(data)
 
    }

  return (
    <div>
      <p>{ // @ts-ignore
      note?.body}</p>
    </div>
  )
}

export default NotePage
