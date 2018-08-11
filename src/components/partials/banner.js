import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'

import ArcadeIcon from 'svg/arcade.svg'

import { BG_COLOR } from 'utils/styles'

const MyHeader = styled.header`
${props => props.loginIsOpen
    ? css`filter: blur(3px);`
    : null}
`

const Logo = styled.img`
  height: 80px;
  width: auto;
`

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100px;
  height: 100%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`

class Banner extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <MyHeader loginIsOpen={this.props.location === '/login'} className='App-header'>
        <Link to='/add-game'>
          <LogoWrap className='logo-wrap'>
            <Logo src={ArcadeIcon} className='App-logo' alt='Urban Arcade logo' />
          </LogoWrap>
        </Link>
        <div className='title-wrap'>
          <h1 className='App-title'>Urbane Arcade</h1>
        </div>
      </MyHeader>
    )
  }
}

const mapStoreToProps = state => ({
  loginIsOpen: state.loginIsOpen
})

export default withRouter(connect(mapStoreToProps)(Banner))
