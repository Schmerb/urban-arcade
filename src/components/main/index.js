import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import LoginModal from './login-modal'
import AddGame from './add-game-modal'
import MyMap from './map'

export default class Main extends Component {
  render () {
    return (
      <main>
        <Route path='/map' component={LoginModal} />
        <Route path='/add-game' component={AddGame} />
        <Route path='/' component={MyMap} />
      </main>
    )
  }
}
