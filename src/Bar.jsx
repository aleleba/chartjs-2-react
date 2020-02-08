import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';

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
            },
            legend = {
                display: true,
                position: 'bottom'
            }

        for(let i = 0; i < 5 ; i ++){
    
            let dato = Math.round(Math.random() * 25)
    
            data.datasets[0].data.push(dato)
    
        }
    
        this.state = {
            id,
            data,
            width: 100,
            height: 50,
            options,
            legend,
            redraw: false
        }
    
    }

    componentDidMount(){
            
        this.setState({
            id: this.props.id !== undefined ? this.props.id : this.state.id,
            data: this.props.data !== undefined ? this.props.data : this.state.data,
            options: this.props.options !== undefined ? this.props.options : this.state.options,
            width: this.props.width !== undefined ? this.props.width : this.state.width,
            height: this.props.height !== undefined ? this.props.height : this.state.height,
            legend: this.props.legend !== undefined ? this.props.legend : this.state.legend,
            redraw: this.props.redraw !== undefined ? this.props.redraw : this.state.redraw
        })

    }

    render(){

        return(
            <Bar id={this.state.id} data={this.state.data} options={this.state.options} width={this.state.width} height={this.state.height} legend={this.state.legend} redraw={this.state.redraw} />
        )
    }
}

export default BarComponent