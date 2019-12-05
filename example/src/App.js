import React, { Component } from 'react'

import { RadialGaugue } from 'chart-2-react'

export default class App extends Component {
  render () {
    return (
      <div style={{maxWidth: '600px', marginTop: '25px'}}>
        <h3 style={{textAlign: 'center'}}>RadialGaugue Component:</h3>
        <RadialGaugue />
      </div>
    )
  }
}
