import * as React from "react"
import './App.css'
import { useState,useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Header from "./components/Header"
import NotesListPage from "./pages/NotesListPage"
import { promises } from "fs"
import NotePage from "./pages/NotePage"


export const App = () => {
   





  return(  
  <Router> 
    <div className="container dark">
      <div className="app">
       
   
    <Route path='/note' exact component = {NotesListPage}></Route>
    <Route path='/note/:id' component = {NotePage}></Route>
    </div>
    </div>
  
    
  </Router>
  )

}






