import { CreateNoteInput } from 'API'

export interface Note {
  id: string
  title: string
  content: string | null
  owner: string
}

export interface NoteState {
  posts: Note[]
}

export type CreateParams = {
  input: CreateNoteInput
}

export type DeleteParams = {
  id: string
}
