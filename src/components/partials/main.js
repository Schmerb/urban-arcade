import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import styled, { css } from 'styled-components'

import LoginModal from 'components/modals/login-modal'
import AddGameModal from 'components/modals/add-game-modal'
import MyMap from 'components/modals/map'

import { openLoginModal } from 'actions/display'

const Container = styled.div`
  background-image: url(/assets/Map.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 105px);
  ${props => props.loginIsOpen
    ? css`filter: blur(5px);`
    : null}
`

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(openLoginModal(false))
  }

  loginModal = () => {
    return <LoginModal isOpen={this.props.loginIsOpen} />
  }

  render () {
    console.log({props: this.props})
    return (
      <main>
        <Container loginIsOpen={this.props.loginIsOpen}>
          <Switch>
            <Route exact path='/' render={this.loginModal} />
            <Route path='/add-game' component={AddGameModal} />
            <Route path='/map' component={MyMap} />
          </Switch>
        </Container>
      </main>
    )
  }
}

const mapStoreToProps = state => ({
  loginIsOpen: state.loginIsOpen
})

export default connect(mapStoreToProps)(Main)
