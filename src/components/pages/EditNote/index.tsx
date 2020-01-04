import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'types/redux'
import { actions as noteActions } from 'store/modules/Note'
import NoteForm from 'components/organisms/NoteForm'

import { Wrap } from './styles'

const EditNote: React.FC = ({ ...props }: any) => {
  const dispatch = useDispatch()
  const note = useSelector((state: State) => state.note.detail)
  const [noteId, setNoteId] = React.useState('')
  const [detail, setDetail] = React.useState({
    id: '',
    title: '',
    content: '',
    owner: '',
  })

  React.useEffect(() => {
    setNoteId(props.match.params.id)
  }, [noteId, props.match.params.id])

  React.useEffect(() => {
    if (noteId !== '') {
      dispatch(noteActions.getNote(noteId))
    }
  }, [dispatch, noteId])

  React.useEffect(() => {
    if (noteId !== '') {
      setDetail(note)
    }
    // eslint-disable-next-line
  }, [dispatch, note])

  return (
    <Wrap>
      {detail.id !== '' && (
        <NoteForm
          mode="edit"
          noteId={detail.id}
          defaultName={detail.title}
          defaultContent={detail.content}
        />
      )}
    </Wrap>
  )
}

export default EditNote
