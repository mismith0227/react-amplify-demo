import { CreateNoteInput, UpdateNoteInput } from 'API'

export interface Note {
  id: string
  title: string
  content: string
  owner: string
  createdAt: string
  updatedAt: string
}

export interface NoteState {
  posts: Note[]
}

export type CreateParams = {
  input: CreateNoteInput
}

export type UpdateParams = {
  input: UpdateNoteInput
}

export type NoteId = {
  id: string
}

export type FormState = {
  id: string
  title: string
  content: string
}
