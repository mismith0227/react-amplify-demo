import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  actions as noteActions,
  selectors as notesSelectors,
} from 'store/modules/Note'
import Text from 'components/atoms/Text'
import NoteList from 'components/organisms/NoteList'

import { Wrap } from './styles'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch()
  const noteList = useSelector(notesSelectors.entitiesListAll)

  const onDelete = (id: string) => {
    dispatch(noteActions.deleteNote(id))
  }

  React.useEffect(() => {
    dispatch(noteActions.listNote())
  }, [dispatch])

  return (
    <Wrap>
      <Text>ログインしました</Text>
      {noteList.length !== 0 && (
        <NoteList notes={noteList} deleteNote={onDelete} />
      )}
    </Wrap>
  )
}

export default Home
