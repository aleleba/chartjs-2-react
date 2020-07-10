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

        <div style={{maxWidth: '600px', marginTop: '25px', margin: 'auto'}}>
          <h3 style={{textAlign: 'center'}}>Multi Axis Bar Line Component:</h3>
          <Bar config={{
            data: {
              datasets: [{
                  label: 'Bar Dataset',
                  data: [10, 20, 30, 40],
                  yAxisID: 'A',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)'
              },
              {
                label: 'Bar Dataset',
                data: [10, 20, 30, 40],
                yAxisID: 'A',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)'
              },
              {
                label: 'Bar Dataset',
                data: [10, 20, 30, 40],
                yAxisID: 'A',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)'
              },
              {
                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'B',
                label: 'Line Dataset',
                data: [5, 8, 10, 30],
                backgroundColor: 'transparent',
                borderColor: 'rgba(75, 192, 192, 1)'
              },
              {
                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'B',
                label: 'Line Dataset',
                data: [15, 20, 25, 30],
                backgroundColor: 'transparent',
                borderColor: 'rgba(75, 192, 192, 1)'
              }],
              labels: ['January', 'February', 'March', 'April'],
          },
          options: {
            scales: {
              yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
                /*ticks: {
                  max: 1,
                  min: 0
                }*/
              }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                /*ticks: {
                  max: 1,
                  min: 0
                }*/
              }]
            }
          }
          }}/>
        </div>

      </div>
    )
  }
  
}
