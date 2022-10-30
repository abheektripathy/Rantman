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
      let response = await fetch('http://127.0.0.1:8000/api/notes')
      //taaku usko fetch karne ka time de tabhi await use kiya 
      let data = await response.json()
      setNotes(data)
      
    
  
      
      
    }
  return (
    <div>
        <div className='notes-list'></div>
        {notes.map((note,index)=>(
         <ListItem note={note} key= {index}></ListItem>
         
        ))}
      
    </div>
  )
}

export default NotesListPage
