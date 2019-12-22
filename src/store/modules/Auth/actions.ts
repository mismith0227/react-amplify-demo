import * as actionTypes from './actionTypes'
import { User } from './types'

export interface Actions {
  readonly [actionTypes.SESSION]: ReturnType<typeof session>
  readonly [actionTypes.LOGIN]: ReturnType<typeof login>
  readonly [actionTypes.LOGIN_DONE]: ReturnType<typeof loginDone>
  readonly [actionTypes.LOGIN_FAIL]: ReturnType<typeof loginFail>
  readonly [actionTypes.LOGOUT]: ReturnType<typeof logout>
}

export type Action = Actions[keyof Actions]

export const session = () => ({
  type: actionTypes.SESSION,
})

export const login = (userName: string, password: string) => ({
  type: actionTypes.LOGIN,
  payload: { userName, password },
})

export const loginDone = (authInfo: User) => ({
  type: actionTypes.LOGIN_DONE,
  payload: authInfo,
})

export const loginFail = (payload: any) => ({
  type: actionTypes.LOGIN_FAIL,
  payload,
})

export const logout = () => ({
  type: actionTypes.LOGOUT,
})
