import { Auth } from 'aws-amplify'
import { confirmSignUpParams } from '../types'

export const confirmSignUp = (payload: confirmSignUpParams) => {
  return Auth.confirmSignUp(payload.username, payload.code, {
    forceAliasCreation: true,
  })
}
