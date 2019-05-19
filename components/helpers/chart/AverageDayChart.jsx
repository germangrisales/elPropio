
// ModulesDayChart: Gráfica de los 4 modulos para el día selecionado 
//                  (Se le pasa como props).


import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

class AverageDayChart extends Component {

    constructor(...props) {

        super(...props)


        this.state = {

            metricsDay: this.props.metricsDay,// objeto general con la información de los dias

            chartDataAverageDay: {}, //Datos de grafica por dia.

            dateData: this.props.dateData, // Fecha de datos que se quiere 

            unidad: this.props.unidad,

            metric: this.props.metric,

            metrica: this.props.metrica


            // Fin de chartData
        } // Fin deState

    }

    componentWillMount() {

        // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
        console.log("componentDidMount")
        console.log("componentDidMount")
        console.log("componentDidMount")

        console.log("metricsDay: State")
        console.log(this.state.metricsDay)

        let metric = this.state.metric // (temperatura, calidad de aire, humedad)

        // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
        // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

        let dataMetric

        if (metric === "Temperature") {

            dataMetric = this.state.metricsDay.totalModules.temperature
        }
        else if (metric === "AirQuality") {

            dataMetric = this.state.metricsDay.totalModules.airQuality
        }
        else if (metric === "Humidity") {

            dataMetric = this.state.metricsDay.totalModules.humidity
        }

        console.log("this.state.metricsDay.totalModules.temperature :")
        console.log(this.state.metricsDay.totalModules.temperature)

        console.log("dataMetric: AverageDayChart")
        console.log(dataMetric)
        

        // Grafica de los 4 Modulos del dia
        this.setState({

            chartDataAverageDay: {

                labels: this.state.metricsDay.hours,

                datasets: [

                    {// Modulo 1: this.state.metrics.moduleTemperature.m1
                        label: `M1 ${this.state.metrica} ${this.state.unidad}`, //Se le pasa la metrica y su unidad
                        data: dataMetric,

                        fillColor: 'rgba( 215, 91, 181,0.5)',
                        backgroundColor: 'rgba(74, 149, 255, 0.5)',

                        strokeColor: 'rgba(74, 149, 255, 1)',
                        borderColor: 'rgba(74, 149, 255, 0.5)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    }

                ]//Fin del DataSets

            }// Fin de chartData
        })

    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
        // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
        // con base a las nuevas propiedades.

        this.setState({

            metricsDay: this.props.metricsDay,
            dateData: this.props.dateData

        })


        // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
        // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

        let metric = this.props.metric // (temperatura, calidad de aire, humedad)

        let dataMetric

        if (metric === "Temperature") {

            dataMetric = this.props.metricsDay.totalModules.temperature
        }
        else if (metric === "AirQuality") {

            dataMetric = this.props.metricsDay.totalModules.airQuality
        }
        else if (metric === "Humidity") {

            dataMetric = this.props.metricsDay.totalModules.humidity
        }

        console.log("this.state.metricsDay.totalModules.temperature :")
        console.log(this.props.metricsDay.totalModules.temperature)

        console.log("dataMetric:")
        console.log(dataMetric)

        this.setState({

            chartDataAverageDay: {

                labels: this.props.metricsDay.hours,

                datasets: [

                    {// Modulo 1: this.state.metrics.moduleTemperature.m1
                        label: `M1 ${this.state.metrica} ${this.state.unidad}`, //Se le pasa la metrica y su unidad
                        data: dataMetric,

                        fillColor: 'rgba( 215, 91, 181,1)',
                        backgroundColor: 'rgba(125, 291, 181, 0.5)',

                        strokeColor: 'rgba(125,32,190,1)',
                        borderColor: 'rgba(255,214,127,1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    }

                ]//Fin del DataSets

            }// Fin de chartData
        })

    }


    render() {

        let unidad = this.state.unidad // Para llevar el valor de la unidad hasta Ticks (Etiqueta eje Y). 

        return (

            <div className="Chart">
                <Line
                    data={this.state.chartDataAverageDay}
                    //width={100}
                    //height={50}
                    options={{
                        title: {
                            display: true,
                            text: `Promedio de ${this.state.metrica}: día ${this.state.dateData}`,
                            fontSize: 30,
                            fontColor: 'teal'

                        },
                        legend: {
                            display: true,
                            labels: {
                                fontColor: 'black',
                                fontSize: 20
                            }
                        },
                        scales: {

                            yAxes: [

                                {
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: `${this.state.metrica}`,
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: `${this.state.unidad}`,
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks

                                        callback: function (value, index, values, ) {

                                            return `${value} ${unidad}`

                                        }
                                    }
                                }],

                            xAxes: [{
                                scaleLabel: {
                                    display: 'true',
                                    labelString: 'Hora',
                                    fontColor: 'black',
                                    fontSize: 20,
                                    position: 'top'
                                },

                                ticks: {
                                    display: true,
                                    labelString: 'Hora',
                                    fontSize: 16,
                                    fontColor: 'black',

                                }
                            }]
                        }

                    }}
                />

            </div>

        )
    }
}

export default AverageDayChart