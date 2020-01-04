import * as React from 'react'
import { useDispatch } from 'react-redux'
import useForm from 'react-hook-form'
import { actions as noteActions } from 'store/modules/Note'
import Button from 'components/atoms/Button'
import {
  Wrap,
  TitleWrap,
  ContentWrap,
  TitleInput,
  ContentInput,
  Footer,
} from './styles'
import { Props } from './types'

interface FormData {
  title: string
  content: string
}

const NoteForm: React.FC<Props> = ({
  mode,
  defaultName,
  defaultContent,
  noteId,
}) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      title: defaultName ? defaultName : '',
      content: defaultContent ? defaultContent : '',
    },
  })

  const onPost = (data: any) => {
    dispatch(noteActions.createNote(data))
  }

  const onEdit = (data: any) => {
    dispatch(
      noteActions.updateNote({
        ...data,
        id: noteId,
      })
    )
  }

  return (
    <Wrap>
      <TitleWrap>
        <TitleInput name="title" ref={register({ required: true })} />
      </TitleWrap>
      <ContentWrap>
        <ContentInput name="content" ref={register({ required: true })} />
      </ContentWrap>

      <Footer>
        {errors.title && 'title is required.'}
        {errors.content && 'content is required.'}
        {mode === 'new' && (
          <Button onClick={handleSubmit(onPost)} disabled={!formState.isValid}>
            追加
          </Button>
        )}

        {mode === 'edit' && (
          <Button onClick={handleSubmit(onEdit)} disabled={!formState.isValid}>
            更新
          </Button>
        )}
      </Footer>
    </Wrap>
  )
}

export default NoteForm
