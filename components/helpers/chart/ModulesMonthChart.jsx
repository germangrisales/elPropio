
// ModulesDayChart: Gráfica de los 4 modulos para el día selecionado 
//                  (Se le pasa como props).


import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

class ModulesMonthChart extends Component {

    constructor(...props) {

        super(...props)


        this.state = {

            metricsMonth: this.props.metricsMonth,// objeto general con la información de los dias

            chartDataModulesMonth: {}, //Datos de grafica por dia.

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
        console.log("componentDidMount")

        console.log("Data Metric Month: Props")
        console.log(this.props.metricsMonth)

        console.log("Data Metric Month: State")
        console.log(this.state.metricsMonth)

    // Se crea el array con los diás (eje x de la gráfica)
        
        let daysArray = [] // Crea arreglo vacio para meter id con los dias

        this.state.metricsMonth.forEach(element => {
        // Itera sobre el objeto metricsMonth y coje cada valor del id(días donde hay info) ylos guarda dentro de daysArray
            daysArray.push(element.id)

        })

        console.log("daysArray:")
        console.log(daysArray) // Arreglo con los días ya creados

        //Se crea los arrays con la información de cada sensor de cada día promediado

        let m1 = [] // Valores del mes de M1

        let m2 = [] // Valores del mes de M2

        let m3 = [] // Valores del mes de M3

        let m4 = [] // Valores del mes de M4

        let metric = this.state.metric // (temperatura, calidad de aire, humedad)


        if (metric === "Temperature") {

            this.state.metricsMonth.forEach(element => {

                m1.push(element.temperature[0])
                m2.push(element.temperature[1])
                m3.push(element.temperature[2])
                m4.push(element.temperature[3])

            })
       
        }
        else if (metric === "AirQuality") {

            this.state.metricsMonth.forEach(element => {

                m1.push(element.airQuality[0])
                m2.push(element.airQuality[1])
                m3.push(element.airQuality[2])
                m4.push(element.airQuality[3])

            })
       
        }
        else if (metric === "Humidity") {

            this.state.metricsMonth.forEach(element => {

                m1.push(element.humidity[0])
                m2.push(element.humidity[1])
                m3.push(element.humidity[2])
                m4.push(element.humidity[3])

            })
       
        }

        console.log("Metric:")
        console.log(metric)
        
        console.log("M1:")
        console.log(m1)

        console.log("m2:")
        console.log(m2)

        console.log("M3:")
        console.log(m3)

        console.log("M4:")
        console.log(m4)

        // (temperatura, calidad de aire, humedad)

        // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
        // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

      //  Grafica de los 4 Modulos del dia

        this.setState({

            chartDataModulesMonth: {

                labels: daysArray,

                datasets: [

                    {// Modulo 1: this.state.metrics.moduleTemperature.m1
                        label: `M1 ${this.props.metrica} ${this.state.unidad}`, //Se le pasa la metrica y su unidad
                        data: m1,

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


                    }, // Fin Modulo1
                    {// Modulo 1: this.state.metrics.moduleTemperature.m1
                        label: `M2 ${this.props.metrica} ${this.state.unidad}`,
                        data: m2,

                        fillColor: 'rgba( 225, 191, 81,1)',
                        backgroundColor: 'rgba(225, 191, 81, 0.5)',

                        strokeColor: 'rgba(255,252,95,1)',
                        borderColor: 'rgba(255,214,127,1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    }, // Fin de M2
                    {// Modulo 3: this.state.metrics.moduleTemperature.m1
                        label: `M3 ${this.props.metrica} ${this.state.unidad}`,
                        data: m3,

                        fillColor: 'rgba( 125, 191, 31,1)',
                        backgroundColor: 'rgba(215, 111, 281, 0.5)',

                        strokeColor: 'rgba(215, 111, 281, 1)',
                        borderColor: 'rgba(215, 111, 281, 1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    }, // Fin de M3
                    {// Modulo 4: this.state.metrics.moduleTemperature.m1
                        label: `M4 ${this.props.metrica} ${this.state.unidad}`,
                        data: m4,

                        fillColor: 'rgba( 25, 11, 31,1)',
                        backgroundColor: 'rgba(25, 255, 50, 0.5)',

                        strokeColor: 'rgba(25, 255, 50,1)',
                        borderColor: 'rgba(25, 255, 50,1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    } // Fin M4

                ]//Fin del DataSets

            }// Fin de chartData
        })

    }

    componentWillReceiveProps() {
        // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
        // con base a las nuevas propiedades.


            // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
            console.log("componentWillReceiveProps")
            console.log("componentWillReceiveProps")
            console.log("componentWillReceiveProps")

        this.setState({

            metricsDay: this.props.metricsMonth,
            dateData: this.props.dateData

        })
        

            console.log("Data Metric Month: Props")
            console.log(this.props.metricsMonth)

            console.log("Data Metric Month: State")
            console.log(this.state.metricsMonth)

            // Se crea el array con los diás (eje x de la gráfica)

            let daysArray = [] // Crea arreglo vacio para meter id con los dias

            this.props.metricsMonth.forEach(element => {
                // Itera sobre el objeto metricsMonth y coje cada valor del id(días donde hay info) ylos guarda dentro de daysArray
                daysArray.push(element.id)

            })

            console.log("daysArray:")
            console.log(daysArray) // Arreglo con los días ya creados

            //Se crea los arrays con la información de cada sensor de cada día promediado

            let m1 = [] // Valores del mes de M1

            let m2 = [] // Valores del mes de M2

            let m3 = [] // Valores del mes de M3

            let m4 = [] // Valores del mes de M4

            let metric = this.props.metric // (temperatura, calidad de aire, humedad)


            if (metric === "Temperature") {

                this.props.metricsMonth.forEach(element => {

                    m1.push(element.temperature[0])
                    m2.push(element.temperature[1])
                    m3.push(element.temperature[2])
                    m4.push(element.temperature[3])

                })

            }
            else if (metric === "AirQuality") {

                this.props.metricsMonth.forEach(element => {

                    m1.push(element.airQuality[0])
                    m2.push(element.airQuality[1])
                    m3.push(element.airQuality[2])
                    m4.push(element.airQuality[3])

                })

            }
            else if (metric === "Humidity") {

                this.props.metricsMonth.forEach(element => {

                    m1.push(element.humidity[0])
                    m2.push(element.humidity[1])
                    m3.push(element.humidity[2])
                    m4.push(element.humidity[3])

                })

            }

            console.log("Metric:")
            console.log(metric)

            console.log("M1:")
            console.log(m1)

            console.log("m2:")
            console.log(m2)

            console.log("M3:")
            console.log(m3)

            console.log("M4:")
            console.log(m4)

            // (temperatura, calidad de aire, humedad)

            // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
            // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

            //  Grafica de los 4 Modulos del dia

            this.setState({

                chartDataModulesMonth: {

                    labels: daysArray,

                    datasets: [

                        {// Modulo 1: this.state.metrics.moduleTemperature.m1
                            label: `M1 ${this.props.metrica} ${this.state.unidad}`, //Se le pasa la metrica y su unidad
                            data: m1,

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


                        }, // Fin Modulo1
                        {// Modulo 1: this.state.metrics.moduleTemperature.m1
                            label: `M2 ${this.props.metrica} ${this.state.unidad}`,
                            data: m2,

                            fillColor: 'rgba( 225, 191, 81,1)',
                            backgroundColor: 'rgba(225, 191, 81, 0.5)',

                            strokeColor: 'rgba(255,252,95,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        }, // Fin de M2
                        {// Modulo 3: this.state.metrics.moduleTemperature.m1
                            label: `M3 ${this.props.metrica} ${this.state.unidad}`,
                            data: m3,

                            fillColor: 'rgba( 125, 191, 31,1)',
                            backgroundColor: 'rgba(215, 111, 281, 0.5)',

                            strokeColor: 'rgba(255,252,95,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        }, // Fin de M3
                        {// Modulo 4: this.state.metrics.moduleTemperature.m1
                            label: `M4 ${this.props.metrica} ${this.state.unidad}`,
                            data: m4,

                            fillColor: 'rgba( 25, 11, 31,1)',
                            backgroundColor: 'rgba(25, 255, 50, 0.5)',

                            strokeColor: 'rgba(55,152,85,1)',
                            borderColor: 'rgba(155,14,27,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        } // Fin M4

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
                    data={this.state.chartDataModulesMonth}
                    //width={100}
                    //height={50}
                    options={{
                        title: {
                            display: true,
                            text: `Comparación de ${this.state.metrica}: Mes ${month} de ${year}`,
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
                                        labelString: `${this.props.metrica}`,
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: `${this.props.unidad}`,
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

export default ModulesMonthChart