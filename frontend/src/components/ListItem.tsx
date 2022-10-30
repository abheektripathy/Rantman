import { type } from '@testing-library/user-event/dist/types/setup/directApi'
import React from 'react'


// @ts-ignore
const ListItem = ({note}) => {
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  )
}

export default ListItem
