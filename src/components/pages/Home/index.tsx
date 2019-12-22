import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useForm from 'react-hook-form'
import { actions as noteActions } from 'store/modules/Note'
import Text from 'components/atoms/Text'
import { State } from 'types/redux'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.info)
  const notes = useSelector((state: State) => state.note.entities)
  const { register, handleSubmit, errors } = useForm()

  const onPost = (data: any) => {
    console.log(data)
    if (user) {
      dispatch(noteActions.createNote(data))
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
      {user && <div>{user.username}</div>}

      <form onSubmit={handleSubmit(onPost)}>
        <div>
          <input name="title" ref={register({ required: true })} />
          {errors.title && 'title is required.'}
        </div>
        <div>
          <input name="content" ref={register({ required: true })} />
          {errors.content && 'content is required.'}
        </div>

        <button onClick={handleSubmit(onPost)}>追加</button>
      </form>

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
