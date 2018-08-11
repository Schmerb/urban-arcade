import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Modal from './index.js'

import { openLoginModal } from 'actions/display'

class LoginModal extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     isOpen: true
  //   }
  // }

  // componentDidMount () {
  //   this.setState({ isOpen: true })
  // }

  closeModal = () => {
    this.props.dispatch(openLoginModal(false))
  }

  render () {
    console.log({props: this.props})
    return (
      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={this.props.isOpen}
        onAfterOpen={this.onAfterOpen}
        onRequestClose={this.closeModal}
        title='Login'>
        <div>
          <h1>yoo</h1>
        </div>
      </Modal>
    )
  }
}

const mapStoreToProps = state => ({
  loginIsOpen: state.loginIsOpen
})

export default connect(mapStoreToProps)(LoginModal)
