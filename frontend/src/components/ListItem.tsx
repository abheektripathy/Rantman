// import { type } from '@testing-library/user-event/dist/types/setup/directApi'
import React from 'react'
// import { Link } from 'react-router-dom'


// @ts-ignore
const ListItem = ({note}) => {
  return (
    <a href={`/note/${note.id}`}>
      <div className='notes-list-item'><h3>{note.body}</h3></div>
      
    </a>
  )
}

export default ListItem
