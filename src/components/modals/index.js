import React, { Component } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid pink;
`

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

export default class Modal extends Component {
  afterOpenModal = () => {
    let { afterOpenModal } = this.props
    afterOpenModal && afterOpenModal()
  }

  closeModal = () => {
    let { closeModal } = this.props
    closeModal && closeModal()
  }

  render () {
    return (
      <ReactModal
        shouldCloseOnOverlayClick
        isOpen={this.props.isOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel='Modal'>
        <Container>
          <h1>Modal</h1>
        </Container>
      </ReactModal>
    )
  }
}
