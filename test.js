import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Widget from './components/widget.js'
import Header from './components/header.js'
import Login from './components/login.js'
import DeptRoster from './components/widgets/deptRoster'
import Chat from './components/widgets/chat/'
import Map from './components/widgets/map'
import UserProfile from './components/widgets/userProfile'
import RGL, { WidthProvider } from 'react-grid-layout'
import config from 'config'
import styled from 'styled-components'
const ReactGridLayout = WidthProvider(RGL)
let Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`
let GridContainer = styled.div`
  width: 100%;
`
class App extends Component {
  constructor (props) {
    super(props)
    this.gridProps = {
      className: 'layout',
      items: 50,
      cols: 30,
      rowHeight: 10,
      autoSize: false,
      draggableHandle: '.df-handle',
      onDragStop: this.onDragStop,
      onLayoutChange: this.onLayoutChange,
      onResize: this.onResize,
      // This turns off compaction so you can place items wherever.
      compactType: null
    }
    this.widgets = {}
    this.state = {
      layout: [
        // {i: '2', x: 0, y: 0, w: 8, h: 16},
        {i: '3', x: 15, y: 0, w: 20, h: 20}
        // {i: '4', x: 8, y: 0, w: 7, h: 18},
        // {i: '5', x: 15, y: 12, w: 5, h: 15}
      ],
      widgets: {
        // '1': {type: 'resources'},
        // '2': {type: 'roster'},
        '3': {type: 'chat'}
        // '4': {type: 'map'},
        // '5': {type: 'profile'}
      }
    }
  }
  onResize = (layout, oldItem, newItem) => {
    let ref = this.widgets[newItem.i]
    let widget = ref.getWrappedInstance()
    if (widget && widget.onResize) {
      widget.onResize(newItem)
    }
  }
  onDragStop = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log(oldItem, newItem)
    let { i } = newItem
    let oldLayout = this.state.layout
  }
  onLayoutChange = layout => {
    this.setState({layout: _.keyBy(layout, 'i')})
  }
  onToggleStatic = gridId => {
    let layout = this.state.layout
    let gridItem = layout[gridId]
    this.setState({
      layout: {
        ...layout,
        [gridId]: {
          ...gridItem,
          // TODO: bug - changing this causes the widget to be remounted
          // probably needs to be fixed in react-grid-layout
          static: !gridItem.static
        }
      }
    })
  }
  getWidget (widget, layout) {
    let gridId = layout.i
    let widgetProps = {
      ref: ref => { this.widgets[gridId] = ref },
      key: layout.i + 'child',
      layout,
      toggleStatic: evt => this.onToggleStatic(gridId)
      /* pass additional stuff into here */
    }
    switch (widget.type) {
      case 'resources':
        return <Widget {...widgetProps} title='Resources' show='resources' />
      case 'roster':
        return <DeptRoster {...widgetProps} />
      case 'chat':
        return <Chat {...widgetProps} />
      case 'map':
        return <Map {...widgetProps} />
      case 'profile':
        return <UserProfile {...widgetProps} />
    }
  }
  renderWidgets () {
    let { layout, widgets } = this.state
    let items = Object.values(layout)
    let components = items.map(layout => {
      let i = layout.i
      let widget = widgets[i]
      return <div key={i} data-grid={layout}>
        {this.getWidget(widget, layout)}
      </div>
    })
    return components
  }
  renderGrid () {
    return <GridContainer>
      <ReactGridLayout style={{width: '100%'}} layout={this.state.layout} {...this.gridProps}>
        {this.renderWidgets()}
      </ReactGridLayout>
    </GridContainer>
  }
  renderLogin () {
  }
  render () {
    console.log(this.props.ready)
    return (
      <Container>
        <Header />
        {this.props.ready
          ? this.renderGrid()
          : <Login />}
      </Container>
    )
  }
}
const select = ({ready}) => ({ready})
export default connect(select)(App)
