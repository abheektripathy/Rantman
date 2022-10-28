import * as React from "react"
import './App.css'
import { useState,useEffect } from "react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Header from "./components/Header"
import NotesListPage from "./pages/NotesListPage"
import { promises } from "fs"


export const App = () => {
   





  return(  
  <> 
    <Header></Header>
    <h2>helloo</h2>
    <NotesListPage></NotesListPage>
  </>
  )

}






