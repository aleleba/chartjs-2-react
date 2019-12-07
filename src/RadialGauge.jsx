import React, { Component } from 'react';

import Chart from 'chart.js';

import 'chartjs-chart-radial-gauge/build/Chart.RadialGauge.umd.min.js';

import ID from './Service/ID.js'

class RadialGauge extends Component {

  constructor(props) { 
    super(props)

    let porcentaje = Math.round(Math.random() * 100),
        porcentajeTexto = `${porcentaje} %`
        
    let id = this.props.id ? this.props.id : ID()

    this.state = {
      id,
      chart: null,
      porcentaje,
      porcentajeTexto
    }

  }

  componentDidMount() {

    var ctx = document.getElementById(`${this.state.id}`).getContext('2d');

      var config = {
        type: 'radialGauge',
        data: {
          labels: this.props.config ? (this.props.config.data ? (this.props.config.data.labels || ["Porcentaje"]) : ["Porcentaje"]) : ["Porcentaje"],
          datasets: [
           {
            data: this.props.config ? ((this.props.config.data) ? (this.props.config.data.datasets !== undefined ? [this.props.config.data.datasets.data] : [this.state.porcentaje]) : [this.state.porcentaje]) : [this.state.porcentaje],
            backgroundColor: this.props.config ? ( this.props.config.data ? (((this.props.config.data.datasets !== undefined) && (this.props.config.data.datasets.backgroundColor)) ? this.props.config.data.datasets.backgroundColor : '#2A969E') : '#2A969E') : '#2A969E',
            borderWidth: this.props.config ? ( this.props.config.data ? (((this.props.config.data.datasets !== undefined) && (this.props.config.data.datasets.borderWidth)) ? this.props.config.data.datasets.borderWidth : 0) : 0) : 0,
            label: this.props.config ? ( this.props.config.data ? (((this.props.config.data.datasets !== undefined) && (this.props.config.data.datasets.label)) ? this.props.config.data.datasets.label : "Porcentaje") : "Porcentaje") : "Porcentaje"
           }
          ]
        },
        options: {
          title: {
            display: this.props.config ? ((this.props.config.options) ? (this.props.config.options.title !== undefined ? this.props.config.options.title.display : false) : false) : false,
            text: this.props.config ? ((this.props.config.options) ? (((this.props.config.options.title) && (this.props.config.options.title.text)) !== undefined ? this.props.config.options.title.text : "Porcentaje") : "Porcentaje") : "Porcentaje"
          },
          responsive: this.props.config ? ((this.props.config.options) ? (this.props.config.options.responsive || true) : true) : true,
          legend: this.props.config ? ((this.props.config.options) ? (this.props.config.options.leyend || {}) : {}) : {},
          animation: {
            // Boolean - Whether we animate the rotation of the radialGauge
            animateRotate: this.props.config ? ((this.props.config.options) ? (this.props.config.options.animation !== undefined ? this.props.config.options.animation.animateRotate : true) : true ) : true,
            // Boolean - Whether we animate scaling the radialGauge from the centre
            animateScale: this.props.config ? ((this.props.config.options) ? (this.props.config.options.animation !== undefined ? this.props.config.options.animation.animateScale : true) : true) : true
          },
        
          // The percentage of the chart that is the center area
          centerPercentage: this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerPercentage || 80) : 80 ) : 80,
        
          // The rotation for the start of the metric's arc
          rotation: this.props.config ? ((this.props.config.options) ? (this.props.config.options.rotation || -Math.PI / 2) : -Math.PI / 2) : -Math.PI / 2,
        
          // the color of the radial gauge's track
          trackColor: this.props.config ? ((this.props.config.options) ? (this.props.config.options.trackColor || 'rgb(204, 221, 238)') : 'rgb(204, 221, 238)' ) : 'rgb(204, 221, 238)',
        
          // the domain for the data, default is [0, 100]
          domain: this.props.config ? ((this.props.config.options) ? (this.props.config.options.domain || [0, 100]) : [0, 100]) : [0, 100],
          
          // whether arc for the gauge should have rounded corners
          roundedCorners: this.props.config ? ((this.props.config.options) ? (this.props.config.options.roundedCorners || true) : true) : true,
        
          // center value options
          centerArea: {
            // whether to display the center text value
            displayText: this.props.config ? ((this.props.config.options) ? (((this.props.config.options.centerArea !== undefined) && (this.props.config.options.centerArea.displayText)) ? this.props.config.options.centerArea.displayText : true) : true) : true,
            // font for the center text
            fontFamily: this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.fontFamily : null) : null) : null,
            // color of the center text
            fontColor: this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.fontColor : null) : null) : null,
            // the size of the center text
            fontSize: this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.fontSize : null) : null) : null,
            // padding around the center area
            padding: this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.padding : null) : null) : null,
            // an image to use for the center background
            backgroundImage: this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.backgroundImage : null) : null) : null,
            // a color to use for the center background
            backgroundColor: this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.backgroundColor : null) : null) : null,
            // the text to display in the center
            // this could be a string or a callback that returns a string
            // if a callback is provided it will be called with (value, options)
            text: this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerArea !== undefined ? this.props.config.options.centerArea.text : null) : null) : null,
          }
        }
      };

    this.setState({
      chart: new Chart(ctx, config)
    })
    
  }

  render() {

    if (this.state.chart !== null) {

      this.props.config ? ((this.props.config.data) ? (this.props.config.data.datasets !== undefined ? (this.state.chart.data.datasets[0].data[0] = this.props.config.data.datasets.data) : [this.state.porcentaje]) : [this.state.porcentaje]) : [this.state.porcentaje]

      //this.state.chart.data.datasets[0].data[0] = this.props.config.data.datasets.data)

      this.props.config ? ((this.props.config.options) ? (this.props.config.options.centerArea !== undefined ? (this.state.chart.options.centerArea.text = this.props.config.options.centerArea.text) : null) : null) : null

      //this.state.chart.options.centerArea.text = this.props.config.options.centerArea.text

      this.state.chart.update();

      return <canvas id={`${this.state.id}`} />

    } else { 
      return <canvas id={`${this.state.id}`} />
    }
  }
}

export default RadialGauge