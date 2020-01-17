import * as actionTypes from './actionTypes'
import { User, SignupParams } from './types'

export interface Actions {
  readonly [actionTypes.SESSION]: ReturnType<typeof session>
  readonly [actionTypes.SIGNUP]: ReturnType<typeof signup>
  readonly [actionTypes.SIGNUP_DONE]: ReturnType<typeof signupDone>
  readonly [actionTypes.SIGNUP_FAIL]: ReturnType<typeof signupFail>
  readonly [actionTypes.LOGIN]: ReturnType<typeof login>
  readonly [actionTypes.LOGIN_DONE]: ReturnType<typeof loginDone>
  readonly [actionTypes.LOGIN_FAIL]: ReturnType<typeof loginFail>
  readonly [actionTypes.LOGOUT]: ReturnType<typeof logout>
}

export type Action = Actions[keyof Actions]

export const session = () => ({
  type: actionTypes.SESSION,
})

export const signup = (payload: SignupParams) => ({
  type: actionTypes.SIGNUP,
  payload,
})

export const signupDone = (authInfo: User) => ({
  type: actionTypes.SIGNUP_DONE,
  payload: authInfo,
})

export const signupFail = (payload: any) => ({
  type: actionTypes.SIGNUP_FAIL,
  payload,
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
