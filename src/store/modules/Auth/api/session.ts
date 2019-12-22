import { Auth } from 'aws-amplify'

export const session = () => Auth.currentAuthenticatedUser()
