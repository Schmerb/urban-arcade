import React, { Component } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

const Container = styled.div`
  background-color: grey;
  width: 100%;
  height: 100%;
  border: 1px solid pink;
`

const TitleBar = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid limegreen;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid limegreen;
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
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '5px'
  }
}

export default class Modal extends Component {
  render () {
    return (
      <ReactModal
        shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onAfterOpen={this.props.onAfterOpen}
        onRequestClose={this.props.onRequestClose}
        style={customStyles}
        contentLabel='Modal'>
        <Container>
          <TitleBar>
            <h1>{this.props.title}</h1>
          </TitleBar>
          <Content>
            {this.props.children}
          </Content>
        </Container>
      </ReactModal>
    )
  }
}
