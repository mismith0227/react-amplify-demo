import * as React from 'react'
import { Link } from 'react-router-dom'
import { StyledList, StyledListItem } from './styles'
import { Props, Note } from './types'

const NoteList: React.FC<Props> = ({ notes, deleteNote }) => {
  const onDelete = (id: string) => {
    deleteNote(id)
  }

  return (
    <StyledList>
      {notes.map((note: Note) => {
        return (
          <StyledListItem key={note.id}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <Link to={`/note/edit/${note.id}`}>編集</Link>
            <button onClick={() => onDelete(note.id)}>削除</button>
          </StyledListItem>
        )
      })}
    </StyledList>
  )
}

export default NoteList
