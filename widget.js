import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelIcon, lockIcon, unlockIcon } from 'dforce/svg/general'
import styled from 'styled-components'
const Frame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  text-align: left;
  border: 1px solid #222228;
  border-radius: 3px;
  background-color: #333339;
  overflow: hidden;
  transition: transform 1s;
  &:after {
    border-radius: 3px;
    display: block;
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0px 3px 5px rgba(0,0,0,0.3);
    opacity: ${props => props.static ? 0 : 1};
    transition: all 1s;
    z-index: -1
  }
`
const DragHandle = styled.div`
  flex: 1;
  padding-left: 0.75em;
`
const TitleBar = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(0deg, rgba(35,35,35,0.65) 0%, rgba(35,35,35,0.9) 100%);
  width: 100%;
  color: #fff;
  font-size: 0.9em;
  font-weight: bold;
  color: #fff;
  height: 2.5rem;
  min-height: 2.5rem;
  z-index: 5;
  border-radius: 3px 3px 0 0;
  position: ${props => props.floatingTitleBar ? 'absolute' : 'relative'};
  top: 0;
  left: 0;
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TitleBarIcon = styled.img`
  width: 0.75em;
  height: 0.75em;
`
const TitleBarButton = styled.span`
  opacity: 0.6;
  padding: 0.5rem;
  transition: opacity 0.35s;
  cursor: pointer;
  &:hover { opacity: 1 }
`
const Content = styled.div`
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
`
class Widget extends Component {
  render () {
    let isStatic = _.get(this.props, 'layout.static')
    return (
      <Frame static={isStatic}>
        <TitleBar floatingTitleBar={this.props.floatingTitleBar}>
          <DragHandle static={isStatic} className={'df-handle'}>
            <span>{this.props.title}</span>
          </DragHandle>
          <Buttons>
            <TitleBarButton onClick={this.props.toggleStatic}>
              <TitleBarIcon src={isStatic ? lockIcon('#fff') : unlockIcon('#fff')} />
            </TitleBarButton>
            <TitleBarButton onClick={() => { /* this.props.closeWidget */ }}>
              <TitleBarIcon src={cancelIcon('#fff')} />
            </TitleBarButton>
          </Buttons>
        </TitleBar>
        <Content>
          {this.props.children}
        </Content>
      </Frame>
    )
  }
}
const mapStoreToProps = state => ({})
export default connect(mapStoreToProps)(Widget)
