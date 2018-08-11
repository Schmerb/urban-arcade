import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from 'svg/logo.svg'
import ArcadeIcon from 'svg/arcade.svg'

import { BG_COLOR } from 'utils/styles'

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

export default class Header extends Component {
  render () {
    return (
      <header className='App-header'>
        <Link to='/'>
          <LogoWrap className='logo-wrap'>
            <Logo src={ArcadeIcon} className='App-logo' alt='logo' />
          </LogoWrap>
        </Link>
        <div className='title-wrap'>
          <h1 className='App-title'>Urbane Arcade</h1>
        </div>

      </header>
    )
  }
}
