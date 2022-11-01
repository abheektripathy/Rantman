import React,{useState,useEffect} from 'react'



// @ts-ignore
const NotePage = ({match}) => {

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
        
        
 
    }

  return (
    <div className='note'>
      <div className='note-header'></div>
      <textarea defaultValue={// @ts-ignore 
      note?.body}>
      </textarea>
    </div>
  )
}

export default NotePage
