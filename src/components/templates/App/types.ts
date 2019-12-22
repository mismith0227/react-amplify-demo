import { RouteConfigComponentProps } from 'react-router-config'
import { State as AuthState } from 'store/modules/Auth'

export interface StateProps {
  readonly auth: AuthState
}

export interface DispatchProps {
  readonly requestSession?: () => void
}

export type Props = RouteConfigComponentProps & StateProps
