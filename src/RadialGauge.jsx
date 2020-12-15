import React, { useState, useEffect } from 'react';

import Chart from 'chart.js';

import 'chartjs-chart-radial-gauge/build/Chart.RadialGauge.umd.min.js';

import ID from './Service/ID.js'

let RadialGauge = props => {

  let porcentaje = Math.round(Math.random() * 100),
      porcentajeTexto = `${porcentaje} %`
        
  let id = props.id ? props.id : ID()

  let [state, setState] = useState({
    id,
    chart: null,
    porcentaje,
    porcentajeTexto
  })

  useEffect( () => {

    var ctx = document.getElementById(`${state.id}`).getContext('2d');

    var config = {
      type: 'radialGauge',
      data: {
        labels: props.config ? (props.config.data ? (props.config.data.labels || ["Porcentaje"]) : ["Porcentaje"]) : ["Porcentaje"],
        datasets: [
          {
          data: props.config ? ((props.config.data) ? (props.config.data.datasets !== undefined ? [props.config.data.datasets.data] : [state.porcentaje]) : [state.porcentaje]) : [state.porcentaje],
          backgroundColor: props.config ? ( props.config.data ? (((props.config.data.datasets !== undefined) && (props.config.data.datasets.backgroundColor)) ? props.config.data.datasets.backgroundColor : '#2A969E') : '#2A969E') : '#2A969E',
          borderWidth: props.config ? ( props.config.data ? (((props.config.data.datasets !== undefined) && (props.config.data.datasets.borderWidth)) ? props.config.data.datasets.borderWidth : 0) : 0) : 0,
          label: props.config ? ( props.config.data ? (((props.config.data.datasets !== undefined) && (props.config.data.datasets.label)) ? props.config.data.datasets.label : "Porcentaje") : "Porcentaje") : "Porcentaje"
          }
        ]
      },
      options: {
        title: {
          display: props.config ? ((props.config.options) ? (props.config.options.title !== undefined ? props.config.options.title.display : false) : false) : false,
          text: props.config ? ((props.config.options) ? (((props.config.options.title) && (props.config.options.title.text)) !== undefined ? props.config.options.title.text : "Porcentaje") : "Porcentaje") : "Porcentaje"
        },
        responsive: props.config ? ((props.config.options) ? (props.config.options.responsive || true) : true) : true,
        legend: props.config ? ((props.config.options) ? (props.config.options.leyend || {}) : {}) : {},
        animation: {
          // Boolean - Whether we animate the rotation of the radialGauge
          animateRotate: props.config ? ((props.config.options) ? (props.config.options.animation !== undefined ? props.config.options.animation.animateRotate : true) : true ) : true,
          // Boolean - Whether we animate scaling the radialGauge from the centre
          animateScale: props.config ? ((props.config.options) ? (props.config.options.animation !== undefined ? props.config.options.animation.animateScale : true) : true) : true
        },
      
        // The percentage of the chart that is the center area
        centerPercentage: props.config ? ((props.config.options) ? (props.config.options.centerPercentage || 80) : 80 ) : 80,
      
        // The rotation for the start of the metric's arc
        rotation: props.config ? ((props.config.options) ? (props.config.options.rotation || -Math.PI / 2) : -Math.PI / 2) : -Math.PI / 2,
      
        // the color of the radial gauge's track
        trackColor: props.config ? ((props.config.options) ? (props.config.options.trackColor || 'rgb(204, 221, 238)') : 'rgb(204, 221, 238)' ) : 'rgb(204, 221, 238)',
      
        // the domain for the data, default is [0, 100]
        domain: props.config ? ((props.config.options) ? (props.config.options.domain || [0, 100]) : [0, 100]) : [0, 100],
        
        // whether arc for the gauge should have rounded corners
        roundedCorners: props.config ? ((props.config.options) ? (props.config.options.roundedCorners || true) : true) : true,
      
        // center value options
        centerArea: {
          // whether to display the center text value
          displayText: props.config ? ((props.config.options) ? (((props.config.options.centerArea !== undefined) && (props.config.options.centerArea.displayText)) ? props.config.options.centerArea.displayText : true) : true) : true,
          // font for the center text
          fontFamily: props.config ? ((props.config.options) ? (props.config.options.centerArea !== undefined ? props.config.options.centerArea.fontFamily : null) : null) : null,
          // color of the center text
          fontColor: props.config ? ((props.config.options) ? (props.config.options.centerArea !== undefined ? props.config.options.centerArea.fontColor : null) : null) : null,
          // the size of the center text
          fontSize: props.config ? ((props.config.options) ? (props.config.options.centerArea !== undefined ? props.config.options.centerArea.fontSize : null) : null) : null,
          // padding around the center area
          padding: props.config ? ((props.config.options) ? (props.config.options.centerArea !== undefined ? props.config.options.centerArea.padding : null) : null) : null,
          // an image to use for the center background
          backgroundImage: props.config ? ((props.config.options) ? (props.config.options.centerArea !== undefined ? props.config.options.centerArea.backgroundImage : null) : null) : null,
          // a color to use for the center background
          backgroundColor: props.config ? ((props.config.options) ? (props.config.options.centerArea !== undefined ? props.config.options.centerArea.backgroundColor : null) : null) : null,
          // the text to display in the center
          // this could be a string or a callback that returns a string
          // if a callback is provided it will be called with (value, options)
          text: props.config ? ((props.config.options) ? (props.config.options.centerArea !== undefined ? props.config.options.centerArea.text : null) : null) : null,
        }
      }
    };

    setState({
      chart: new Chart(ctx, config)
    })

  }, [props])

  if (state.chart !== null) {

    props.config ? ((props.config.data) ? (props.config.data.datasets !== undefined ? (state.chart.data.datasets[0].data[0] = props.config.data.datasets.data) : [state.porcentaje]) : [state.porcentaje]) : [state.porcentaje]

    //state.chart.data.datasets[0].data[0] = props.config.data.datasets.data)

    props.config ? ((props.config.options) ? (props.config.options.centerArea !== undefined ? (state.chart.options.centerArea.text = props.config.options.centerArea.text) : null) : null) : null

    //state.chart.options.centerArea.text = props.config.options.centerArea.text

    state.chart.update();

    return <canvas id={`${state.id}`} />

  } else {
    return <canvas id={`${state.id}`} />
  }

}

export default RadialGauge