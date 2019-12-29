import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions as noteActions } from 'store/modules/Note'
import Text from 'components/atoms/Text'
import { State } from 'types/redux'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state: State) => state.note.entities)

  const onDelete = (id: string) => {
    dispatch(noteActions.deleteNote(id))
  }

  React.useEffect(() => {
    dispatch(noteActions.listNote())
  }, [dispatch])

  return (
    <div>
      <Text>ログインしました</Text>

      <div>
        {notes &&
          Object.keys(notes).map((id: string) => {
            return (
              <div key={notes[id].id}>
                <h4>{notes[id].title}</h4>
                <p>{notes[id].content}</p>
                <button onClick={() => onDelete(notes[id].id)}>削除</button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Home
