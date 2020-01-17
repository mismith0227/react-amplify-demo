export interface User {
  username: string
  attributes: {
    email: string
    email_verified: boolean
    phone_number: string
    phone_number_verified: boolean
    sub: string
  }
}

export type LoginParams = {
  userName: string
  password: string
}

export type SignupParams = {
  username: string
  password: string
  email: string
  phone_number: number
}

export type confirmSignUpParams = {
  username: string
  code: string
}
