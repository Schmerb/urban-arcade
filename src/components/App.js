
import React, { Component } from 'react'
import styled from 'styled-components'

import Main from 'components/partials/main'
import Banner from 'components/partials/banner'
import Footer from 'components/partials/footer'

// import { BG_COLOR } from 'utils/styles'
import './app.css'

const Overlay = styled.div`
  background-color: ${props => props.backgroundColor};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  pointer-events: none;
  transition: all 1s ease;
`

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    window.addEventListener('load', this.handleLoad) // fires once all assets have fully loaded
  }

  handleLoad = () => {
    this.setState({ loading: false })
  }

  render () {
    const backgroundColor = this.state.loading ? '#000' : null
    return (
      <div className='App'>
        <Overlay backgroundColor={backgroundColor} />
        <Banner />
        <Main />
      </div>
    )
  }
}

export default App
