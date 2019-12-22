import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions as noteActions } from 'store/modules/Note'
import Text from 'components/atoms/Text'
import { State } from 'types/redux'

interface HomeProps {}

type FormState = {
  title: string
  content: string
}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.info)
  const notes = useSelector((state: State) => state.note.entities)

  const [input, setInput] = React.useState<FormState>({
    title: '',
    content: '',
  })

  const onFormChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(prev => ({ ...prev, [name]: value }))
  }

  const onPost = () => {
    if (input.title === '' || input.content === '') return
    setInput({ title: '', content: '' })

    if (user) {
      dispatch(noteActions.createNote(input.title, input.content, user.username))
    }
  }

  const onDelete = (id: string) => {
    dispatch(noteActions.deleteNote(id))
  }

  React.useEffect(() => {
    dispatch(noteActions.listNote())
  }, [dispatch])

  return (
    <div className="Home">
      <div>
        <div>
          タイトル
          <input value={input.title} name="title" onChange={onFormChange} />
        </div>
        <div>
          内容
          <input value={input.content} name="content" onChange={onFormChange} />
        </div>
        <button onClick={onPost}>追加</button>
      </div>
      {user && <div>{user.username}</div>}

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
