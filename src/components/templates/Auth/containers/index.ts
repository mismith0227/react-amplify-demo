import { connect } from 'react-redux'
import { compose, pure, lifecycle } from 'recompose'
import { actions as authActions } from 'store/modules/Auth'
import { MapDispatchToProps, MapStateToProps } from 'types/redux'
import { DispatchProps, StateProps } from '../types'
import { push } from 'connected-react-router'
import { State as AuthState } from 'store/modules/Auth'

export interface Props {
  readonly auth: AuthState
  readonly requestSession: () => void
  readonly pushAuth: () => void
}

const mapStateToProps: MapStateToProps<StateProps, {}> = state => ({
  auth: state.auth,
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  requestSession: () => dispatch(authActions.session()),
  pushAuth: () => {
    dispatch(push('/home'))
  },
})

const containers = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle<Props, {}, {}>({
    componentDidMount() {
      this.props.requestSession()
    },
    componentDidUpdate() {
      if (!this.props.auth.loading && this.props.auth.info) {
        this.props.pushAuth()
      }
    },
  }),
  pure
)

export default containers
