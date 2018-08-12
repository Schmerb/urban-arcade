import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'

import ArcadeIcon from 'svg/arcade.svg'

import { fonts } from 'src/fonts.js'

import { BG_COLOR } from 'utils/styles'

const MyHeader = styled.header`
${props => props.loginIsOpen
    ? css`filter: blur(3px);`
    : null}
`
const H1 = styled.h1`
  font-family: ${props => props.fontFamily}
  font-size: ${props => props.fontSize + 'px;'}
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

const Button = styled.button`
  cursor: pointer;
`

const Label = styled.label`
  display: inline-block;
  width: 160px;
  height: 20px;
  line-height: 20px;
  margin-left: 5;
  margin-right: 5;
  overflow: hidden;
`

const List = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  height: 100px;
  overflow: hidden;
  list-style: none;
`

class Banner extends Component {
  constructor (props) {
    super(props)
    let key = Object.keys(fonts[0])[0]
    this.state = {
      fontFamily: fonts[0][key],
      fontSize: 24
    }

    this.index = 0
    this.max = fonts.length - 1
  }

  handleNext = () => this.handleClick('next')
  handlePrev= () => this.handleClick('prev')

  handleClick = (e, dir) => {
    const isNext = dir === 'next'
    let num = isNext ? 1 : -1
    let nextIndex = this.index + num
    if (nextIndex > this.max) {
      nextIndex = 0
    } else if (nextIndex < 0) {
      nextIndex = this.max
    }

    const key = Object.keys(fonts[nextIndex])[0]
    this.setState({ fontFamily: fonts[nextIndex][key] }, () => {
      this.index = nextIndex
    })
  }

  handleFontPlus = () => this.setState({ fontSize: this.state.fontSize + 1 })
  handleFontNeg = () => this.setState({ fontSize: this.state.fontSize - 1 })

  render () {
    return (
      <MyHeader loginIsOpen={this.props.location === '/login'} className='App-header'>
        <Link to='/add-game'>
          <LogoWrap className='logo-wrap'>
            <Logo src={ArcadeIcon} className='App-logo' alt='Urban Arcade logo' />
          </LogoWrap>
        </Link>
        <div className='title-wrap'>
          <H1 fontFamily={this.state.fontFamily} fontSize={this.state.fontSize} className='App-title'>Urbane Arcade</H1>
          <List>
            <li>
              <Button onClick={this.handlePrev} type='button'>prev</Button>
              <Label>{this.state.fontFamily}</Label>
              <Button onClick={this.handleNext} type='button'>next</Button>
            </li>
            <li>
              <Button onClick={this.handleFontNeg} type='button'>-</Button>
              <Label>Font Size: {this.state.fontSize}px</Label>
              <Button onClick={this.handleFontPlus} type='button'>+</Button>
            </li>
          </List>
        </div>
      </MyHeader>
    )
  }
}

const mapStoreToProps = state => ({
  loginIsOpen: state.loginIsOpen
})

export default withRouter(connect(mapStoreToProps)(Banner))
