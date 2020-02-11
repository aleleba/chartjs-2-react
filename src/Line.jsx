import React, { Component } from 'react';

import ID from './Service/ID.js';

class LineComponent extends Component {

    constructor(props) {

        super(props)

        let id = this.props.id ? this.props.id : ID(),
            data = {
                labels: ['Valor 1', 'Valor 2', 'Valor 3', 'Valor 4', 'Valor 5'],
                datasets: [{
                    label: 'Valor',
                    fill: false,
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
    
        this.state = {
            id,
            chart: null,
            data,
            options
        }
    
    }

    componentDidMount(){

        var ctx = document.getElementById(`${this.state.id}`).getContext('2d');

        let config = {
            type: 'line',
            data: (this.props.config !== undefined) && (this.props.config.data !== undefined) ? this.props.config.data : this.state.data,
            options: (this.props.config !== undefined) && (this.props.config.options !== undefined) ? this.props.config.options : this.state.options
        }

        this.setState({
            id: this.props.id !== undefined ? this.props.id : this.state.id,
            chart: new Chart(ctx, config)
        })

    }

    render(){

        if (this.state.chart !== null) {
      
            this.state.chart.update();
    
            return <canvas id={`${this.state.id}`} />

    
        } else { 
            return <canvas id={`${this.state.id}`} />
        }

        
    }
}

export default LineComponent