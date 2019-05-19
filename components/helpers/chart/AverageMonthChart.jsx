
// ModulesDayChart: Gráfica de los 4 modulos para el día selecionado 
//                  (Se le pasa como props).


import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

class AverageMonthChart extends Component {

    constructor(...props) {

        super(...props)


        this.state = {

            metricsMonth: this.props.metricsMonth,// objeto general con la información de los dias

            chartDataAverageMonth: {}, //Datos de grafica por dia.

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


        let metric = this.state.metric // (temperatura, calidad de aire, humedad)

        // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
        // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

        let TotalMetricMonth = [] // Donde se guardará el array con el promedio mensual

        if (metric === "Temperature") {

            this.state.metricsMonth.forEach(element => {

                TotalMetricMonth.push(element.totalTemperature)
            })
        }
        else if (metric === "AirQuality") {

            this.state.metricsMonth.forEach(element => {

                TotalMetricMonth.push(element.totalAirQuality)
            })
        }
        else if (metric === "Humidity") {

            this.state.metricsMonth.forEach(element => {

                TotalMetricMonth.push(element.totalHumidity)
            })

        }

        console.log("TotalMetricMonth: ")
        console.log(TotalMetricMonth)

        // Se crea el array con los diás (eje x de la gráfica)

        let daysArray = [] // Crea arreglo vacio para meter id con los dias

        this.state.metricsMonth.forEach(element => {
            // Itera sobre el objeto metricsMonth y coje cada valor del id(días donde hay info) ylos guarda dentro de daysArray
            daysArray.push(element.id)

        })

        // Grafica de los 4 Modulos del mes
        this.setState({

            chartDataAverageMonth: {

                labels: daysArray,

                datasets: [

                    {// Modulo 1: this.state.metrics.moduleTemperature.m1
                        label: `Promedio de ${this.state.metrica}: ${this.state.unidad}`, //Se le pasa la metrica y su unidad
                        data: TotalMetricMonth,

                        fillColor: 'rgba( 215, 91, 181,1)',
                        backgroundColor: 'rgba(125, 291, 181, 0.5)',

                        strokeColor: 'rgba(125, 291, 181, 1)',
                        borderColor: 'rgba(125, 291, 181, 1)',
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

        // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
        // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

        let TotalMetricMonth = [] // Donde se guardará el array con el promedio mensual

        if (metric === "Temperature") {

            this.props.metricsMonth.forEach(element => {

                TotalMetricMonth.push(element.totalTemperature)
            })
        }
        else if (metric === "AirQuality") {

            this.props.metricsMonth.forEach(element => {

                TotalMetricMonth.push(element.totalAirQuality)
            })
        }
        else if (metric === "Humidity") {

            this.props.metricsMonth.forEach(element => {

                TotalMetricMonth.push(element.totalHumidity)
            })

        }

        console.log("TotalMetricMonth: ")
        console.log(TotalMetricMonth)

        // Se crea el array con los diás (eje x de la gráfica)

        let daysArray = [] // Crea arreglo vacio para meter id con los dias

        this.state.metricsMonth.forEach(element => {
            // Itera sobre el objeto metricsMonth y coje cada valor del id(días donde hay info) ylos guarda dentro de daysArray
            daysArray.push(element.id)

        })


        this.setState({

            chartDataAverageMonth: {

                labels: daysArray,

                datasets: [

                    {// Modulo 1: this.state.metrics.moduleTemperature.m1
                        label: `M1 ${this.state.metrica} ${this.state.unidad}`, //Se le pasa la metrica y su unidad
                        data: TotalMetricMonth,

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

        let split = this.state.dateData.split('-')

        let year = split[0]
       
        let month = split[1]
       
        return (

            <div className="Chart">
                <Line
                    data={this.state.chartDataAverageMonth}
                    //width={100}
                    //height={50}
                    options={{
                        title: {
                            display: true,
                            text: `Promedio de ${this.state.metrica}: Mes ${month} de ${year}`,
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

export default AverageMonthChart