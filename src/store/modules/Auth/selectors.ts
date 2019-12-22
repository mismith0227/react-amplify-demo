import { createSelector } from 'reselect'
import { State } from 'types/redux'

export const root = (state: State) => state.auth

export const getUser = createSelector(root, authUser => authUser.info)
