import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import hexToRgba from 'hex-rgba'

import Modal from './index.js'

import { BG_COLOR } from 'utils/styles'
import ArcadeIcon from 'svg/arcade.svg'

const containerStyles = {
  justifyContent: 'space-around',
  alignItems: 'center'
}

class GameStatsModal extends Component {
  render () {
    console.log({LoginModal_props: this.props})
    return (
      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={this.props.isOpen}
        onAfterOpen={this.onAfterOpen}
        onRequestClose={this.closeModal}
        title='Welcome to Urban Arcade!'
        opacity={70}
        customStyles={{content: { height: '350px', minWidth: '200px', maxWidth: '600px' }}}
        containerStyle={containerStyles}>
        <h1>Game Stats Modal</h1>
      </Modal>
    )
  }
}

const mapStoreToProps = state => ({
  loginIsOpen: state.loginIsOpen
})

export default withRouter(connect(mapStoreToProps)(GameStatsModal))
