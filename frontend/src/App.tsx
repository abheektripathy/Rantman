import * as React from "react"
import './App.css'
import { useState,useEffect } from "react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Header from "./components/Header"
import NotesListPage from "./pages/NotesListPage"
import { promises } from "fs"


export const App = () => {
   

  const [notes, setNotes] = useState([])

  useEffect(()=> {
    getNotes()

  })

  let getNotes = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/notes')
    //taaku usko fetch karne ka time de tabhi await use kiya 
    let data = await response.json()
    setNotes(data)
  

    
    
  }



  return(  
  <> 
    <Header></Header>
    <h2>helloo</h2>
    <NotesListPage></NotesListPage>
  </>
  )

}






