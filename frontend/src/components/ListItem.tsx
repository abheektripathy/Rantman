import { type } from '@testing-library/user-event/dist/types/setup/directApi'
import React from 'react'
import { Link } from 'react-router-dom'


// @ts-ignore
const ListItem = ({note}) => {
  return (
    <Link to = {`/note/${note.id}`}>
      <h3>{note.body}</h3>
    </Link>
  )
}

export default ListItem
