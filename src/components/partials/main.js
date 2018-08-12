import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'
import ReactGridLayout from 'react-grid-layout'

import LoginModal from 'components/modals/login-modal'
import AddGameModal from 'components/modals/add-game-modal'
import GameStatsModal from 'components/modals/game-stats-modal'
import MyMap from 'components/modals/map'

import { openLoginModal } from 'actions/display'

const Container = styled.div`
  background-image: url(/assets/Map.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 105px);
  width: 100%;
  float: left;
  ${props => props.loginIsOpen
    ? css`filter: blur(5px);`
    : null}
`

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      layout: [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ]
    }

    this.gridProps = {
      className: 'layout',
      items: 50,
      cols: 30,
      rowHeight: 10,
      autoSize: false,
      draggableHandle: '.handle',
      onDragStop: this.onDragStop,
      onLayoutChange: this.onLayoutChange,
      onResize: this.onResize,
      // This turns off compaction so you can place items wherever.
      compactType: null
    }
  }

  componentWillMount () {
    // this.props.history.push('/login')
  }

  isHome = () => this.props.location.pathname === '/'
  isLogin = () => this.props.location.pathname === '/login'

  render () {
    console.log({props: this.props})
    let isLogin = this.isLogin()
    return (
      <main>
        <Container loginIsOpen={this.isLogin()}>
          <LoginModal key='a' isOpen={this.isLogin()} />
          {/* <GameStatsModal key='b' isOpen={this.isHome()} />
          <Route path='/add-game' component={AddGameModal} />
          <Route path='/map' component={MyMap} /> */}
          <ReactGridLayout style={{width: '100%'}} layout={this.state.layout} {...this.gridProps}>
            <div key='a'>a</div>
            <div key='b'>b</div>
            <div key='c'>c</div>
            <div key='d'>d</div>
          </ReactGridLayout>
        </Container>
      </main>
    )
  }
}

const mapStoreToProps = state => ({
  loginIsOpen: state.loginIsOpen
})

export default withRouter(connect(mapStoreToProps)(Main))
