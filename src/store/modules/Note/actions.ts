import * as actionTypes from './actionTypes'
import { Note, FormState } from './types'

export interface Actions {
  readonly [actionTypes.LIST]: ReturnType<typeof listNote>
  readonly [actionTypes.LIST_DONE]: ReturnType<typeof listDone>
  readonly [actionTypes.LIST_FAIL]: ReturnType<typeof listFail>
  readonly [actionTypes.CREATE]: ReturnType<typeof createNote>
  readonly [actionTypes.CREATE_DONE]: ReturnType<typeof createDone>
  readonly [actionTypes.CREATE_FAIL]: ReturnType<typeof createFail>
  readonly [actionTypes.DELETE]: ReturnType<typeof deleteNote>
  readonly [actionTypes.DELETE_DONE]: ReturnType<typeof deleteDone>
  readonly [actionTypes.DELETE_FAIL]: ReturnType<typeof deleteFail>
}

export type Action = Actions[keyof Actions]

export const createNote = (data: FormState) => ({
  type: actionTypes.CREATE,
  payload: data,
})

export const createDone = (createNote: Note) => ({
  type: actionTypes.CREATE_DONE,
  payload: createNote,
})

export const createFail = (payload: any) => ({
  type: actionTypes.CREATE_FAIL,
  payload,
})

export const deleteNote = (id: string) => ({
  type: actionTypes.DELETE,
  payload: id,
})

export const deleteDone = (deleteNoteId: string) => ({
  type: actionTypes.DELETE_DONE,
  payload: deleteNoteId,
})

export const deleteFail = (payload: any) => ({
  type: actionTypes.DELETE_FAIL,
  payload,
})

export const listNote = () => ({
  type: actionTypes.LIST,
})

export const listDone = (listNote: Note[]) => ({
  type: actionTypes.LIST_DONE,
  payload: listNote,
})

export const listFail = (payload: any) => ({
  type: actionTypes.LIST_FAIL,
  payload,
})
