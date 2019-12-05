import React, { Component } from 'react'

import { RadialGauge } from 'chartjs-2-react'

export default class App extends Component {
  render () {
    return (
      <div style={{maxWidth: '600px', marginTop: '25px'}}>
        <h3 style={{textAlign: 'center'}}>RadialGauge Component:</h3>
        <RadialGauge />
      </div>
    )
  }
}
