import React, { Component } from 'react';

import { RadialGauge, Bar, Line } from 'chartjs-2-react';

export default class App extends Component {
  render () {

    return (
      <div style={{paddingBottom: '100px'}}>

        <div style={{maxWidth: '600px', marginTop: '25px', margin: 'auto'}}>
          <h3 style={{textAlign: 'center'}}>RadialGauge Component:</h3>
          <RadialGauge />
        </div>

        <div style={{maxWidth: '600px', marginTop: '25px', margin: 'auto'}}>
          <h3 style={{textAlign: 'center'}}>Bar Component:</h3>
          <Bar />
        </div>

        <div style={{maxWidth: '600px', marginTop: '25px', margin: 'auto'}}>
          <h3 style={{textAlign: 'center'}}>Line Component:</h3>
          <Line />
        </div>

      </div>
    )
  }
}
