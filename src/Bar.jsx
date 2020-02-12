import React, { Component } from 'react';

import ID from './Service/ID.js';

class BarComponent extends Component {

    constructor(props) {

        super(props)

        let id = this.props.id ? this.props.id : ID(),
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
            type: 'bar',
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

            if((this.props.config !== undefined) && (this.props.config.data !== undefined)){
                this.state.chart.data.labels = this.props.config.data.labels
                this.state.chart.data.datasets = this.props.config.data.datasets
            }

            if((this.props.config !== undefined) && (this.props.config.options !== undefined)){
                this.state.chart.options = this.props.config.options
            }
      
            this.state.chart.update();
    
            return <canvas id={`${this.state.id}`} />

    
        } else { 
            return <canvas id={`${this.state.id}`} />
        }

    }
}

export default BarComponent