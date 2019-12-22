import { createSelector } from 'reselect'
import { State } from 'types/redux'

export const root = (state: State) => state.auth

export const getUser = createSelector(root, authUser => authUser.info)

// export const displayName = createSelector(
//   root,
//   (authUser): string => authUser.nickname || authUser.name
// )

// export const email = createSelector(
//   root,
//   (authUser): string => authUser.email
// )

// export const userImage = createSelector(
//   root,
//   (authUser): string => authUser.image
// )

// export const isTermsChecked = createSelector(
//   root,
//   authUser => authUser.termsCheck
// )
