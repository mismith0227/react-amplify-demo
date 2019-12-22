import {
  MapDispatchToProps as _MapDispatchToProps,
  MapStateToProps as _MapStateToProps,
} from 'react-redux'

import { RouterState } from 'connected-react-router'
import { Action as AuthAction, State as AuthState } from 'store/modules/Auth'
import { Action as NoteAction, State as NoteState } from 'store/modules/Note'

export type Action = AuthAction | NoteAction

export interface State {
  readonly auth: AuthState
  readonly note: NoteState
  readonly router: RouterState
}

export type MapStateToProps<
  StateProps = object,
  OwnProps = object
> = _MapStateToProps<StateProps, OwnProps, State>

export type MapDispatchToProps<
  DispatchProps = object,
  OwnProps = object
> = _MapDispatchToProps<DispatchProps, OwnProps>
