import React, { useEffect, useState } from 'react'

const NotesListPage = () => {

    const [notes, setNotes] = useState([])

  useEffect(()=> {
    getNotes()

  },[])

  let getNotes = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/notes')
    //taaku usko fetch karne ka time de tabhi await use kiya 
    let data = await response.json()
    setNotes(data)
  

    
    
  }

  return (
    <div>
      
    </div>
  )
}

export default NotesListPage
