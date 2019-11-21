import React, { Component } from 'react';

import Chart from 'chart.js';

import 'chartjs-chart-radial-gauge/build/Chart.RadialGauge.umd.min.js';

class RadialGauge extends Component {

  componentDidMount(){

    var ctx = document.getElementById('chart').getContext('2d');
    
    /*var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#2A969E");
    gradientStroke.addColorStop(1, "#2A969E");*/
    //gradientStroke.addColorStop(2, "#f49080");

    var config = {
      type: 'radialGauge',
      data: {
        labels: this.props.config.data.labels || ["Porcentaje"],
        datasets: [
         {
          data: this.props.config.data.datasets !== undefined ? [this.props.config.data.datasets.data] : [0],
          backgroundColor: ((this.props.config.data.datasets !== undefined) && (this.props.config.data.datasets.backgroundColor)) ? this.props.config.data.datasets.backgroundColor : '#2A969E',
          borderWidth: ((this.props.config.data.datasets !== undefined) && (this.props.config.data.datasets.borderWidth)) ? this.props.config.data.datasets.borderWidth : 0,
          label: ((this.props.config.data.datasets !== undefined) && (this.props.config.data.datasets.label)) ? this.props.config.data.datasets.label : "Porcentaje"
         }
        ]
      },
      options: {
        title: {
          display: this.props.config.options.title !== undefined ? this.props.config.options.title.display : false,
          text: ((this.props.config.options.title) && (this.props.config.options.title.text)) !== undefined ? this.props.config.options.title.text : "Porcentaje"
        },
        responsive: this.props.config.options.responsive || true,
        legend: this.props.config.options.leyend || {},
        animation: {
          // Boolean - Whether we animate the rotation of the radialGauge
          animateRotate: this.props.config.options.animation !== undefined ? this.props.config.options.animation.animateRotate : true,
          // Boolean - Whether we animate scaling the radialGauge from the centre
          animateScale: this.props.config.options.animation !== undefined ? this.props.config.options.animation.animateScale : true
        },
      
        // The percentage of the chart that is the center area
        centerPercentage: this.props.config.options.centerPercentage || 80,
      
        // The rotation for the start of the metric's arc
        rotation: this.props.config.options.rotation || -Math.PI / 2,
      
        // the color of the radial gauge's track
        trackColor: this.props.config.options.trackColor || 'rgb(204, 221, 238)',
      
        // the domain for the data, default is [0, 100]
        domain: this.props.config.options.domain || [0, 100],
        
        // whether arc for the gauge should have rounded corners
        roundedCorners: this.props.config.options.roundedCorners || true,
      
        // center value options
        centerArea: {
          // whether to display the center text value
          displayText: ((this.props.config.options.centerArea !== undefined) && (this.props.config.options.centerArea.displayText)) ? this.props.config.options.centerArea.displayText : true,
          // font for the center text
          fontFamily: this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.fontFamily : null,
          // color of the center text
          fontColor: this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.fontColor : null,
          // the size of the center text
          fontSize: this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.fontSize : null,
          // padding around the center area
          padding: this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.padding : null,
          // an image to use for the center background
          backgroundImage: this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.backgroundImage : null,
          // a color to use for the center background
          backgroundColor: this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.backgroundColor : null,
          // the text to display in the center
          // this could be a string or a callback that returns a string
          // if a callback is provided it will be called with (value, options)
          text: this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.text : null,
        }
      }
    };

    new Chart(ctx, config);

  }

  render() {
    return (          
      <canvas id="chart"></canvas>
    )
  }
}

export default RadialGauge