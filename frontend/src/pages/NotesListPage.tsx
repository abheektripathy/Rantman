import React, { useEffect, useState } from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {

  //ts ke saath <any[]> use kario usestatae mein
  //pretty neat sys here - get notes fetches from port 8000 jahan django ka backend hai and fir woh setnotes data set kardeta 
  //aur map ke through print hojata here
    const [notes, setNotes] = useState<any[]>([])

    useEffect(()=> {
      getNotes()
  
    },[])
  
    let getNotes = async() => {
      let response = await fetch('/api/notes')
      //taaku usko fetch karne ka time de tabhi await use kiya 
      let data = await response.json()
      setNotes(data)
      
    
  
      
      
    }
  return (
    <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
            
        </div>
  )
}

export default NotesListPage
