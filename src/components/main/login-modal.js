import React, { Component } from 'react'
import styled from 'styled-components'

import Modal from 'components/modals'

export default class LoginModal extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Modal>
        <h1>Login Modal</h1>

      </Modal>
    )
  }
}
