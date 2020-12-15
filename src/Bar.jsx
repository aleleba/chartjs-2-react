import React, { useState, useEffect } from 'react';

import ID from './Service/ID.js';

let BarComponent = props => {

    let id = props.id ? props.id : ID(),
        data = {
            labels: ['Valor 1', 'Valor 2', 'Valor 3', 'Valor 4', 'Valor 5'],
            datasets: [{
                label: 'Valor',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options = {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }

    for(let i = 0; i < 5 ; i ++){

        let dato = Math.round(Math.random() * 25)

        data.datasets[0].data.push(dato)

    }

    let [state, setState] = useState({
        id,
        chart: null,
        data,
        options
    })

    useEffect( ()=> {

        var ctx = document.getElementById(`${state.id}`).getContext('2d');

        let config = {
            type: 'bar',
            data: (props.config !== undefined) && (props.config.data !== undefined) ? props.config.data : state.data,
            options: (props.config !== undefined) && (props.config.options !== undefined) ? props.config.options : state.options
        }

        setState({
            id: props.id !== undefined ? props.id : state.id,
            chart: new Chart(ctx, config)
        })

    }, [props])

    if (state.chart !== null) {

        if((props.config !== undefined) && (props.config.data !== undefined)){
            state.chart.data.labels = props.config.data.labels
            state.chart.data.datasets = props.config.data.datasets
        }

        if((props.config !== undefined) && (props.config.options !== undefined)){
            state.chart.options = props.config.options
        }
  
        state.chart.update();

        return <canvas id={`${state.id}`} />


    } else { 
        return <canvas id={`${state.id}`} />
    }

}

export default BarComponent