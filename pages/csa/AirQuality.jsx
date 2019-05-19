
// Componente Calidad Aire renderiza los componentes:

// -> Calendar: Para elegir el dia que se quieren ver la graficas de Calidad Aire
//              Ejecuta el método  reciveDataDay(e): Hace una peticion axios a la Base de datos
//              del dia selecionado y devuelve un objeto con la información.

// -> ModulesDayChart: Renderiza la grafica de los 4 modulos para el día selecionado
//      Recibe por Props:
//          - Metric: String (Humedad, Humedad o Calidad aire) 
//          - Unidad: String (ºC, % , ppm)
//          - metricsDay: this.state.metricsDay -> objeto almacenado en el estado con toda la informacion.
//          - dateData: this.state.dateData -> Almacena el día selecionado.

// NOTA: Se usa un If en el render() para mostrar la gráfica, porque si no se ha 
//       selecionado una fecha (No se ha traido el objeto de la base de datos) y
//        se intenta renderizar el componente ModulesDayChart genera un ERROR

//  FALTA QUE CUANDO SE SELECCIONE OTRA FECHA ACTUALICE ELCOMPONENTE ModulesDayChart



import React, { Component, Fragment } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import axios from 'axios'

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'
// Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

import Calendar from '../../components/helpers/Calendar.jsx'


import ModulesDayChart from '../../components/helpers/chart/ModulesDayChart.jsx'

import AverageDayChart from '../../components/helpers/chart/AverageDayChart.jsx'

import ModulesMonthChart from '../../components/helpers/chart/ModulesMonthChart.jsx'

import AverageMonthChart from '../../components/helpers/chart/AverageMonthChart.jsx'

import moment from 'moment'
// Se importa moment que lo usa internamente esta libreria

//AppBar + Drawer MaterialUI (sidebar)
import CsaLayout from '../../components/CsaLayout.jsx'

class AirQuality extends Component {

    constructor(...props) {

        super(...props)
        console.log("Constructor")

        this.state = {

            metricsDayBoolean: false, // Cambia a true Si la fecha selecionada tiene datos para ser graficados.

            metricsMonthBoolean: false, // Cambia a true Si la fecha selecionada tiene datos para ser graficados.

            metricsDay: {},// objeto general con la información de los dias

            dateData: '', // Fecha de datos que se quiere 

            dayAverage: [],

            month: '',

            year: '',

            metricsMonth: {},

            metrica: 'Calidad de Aire'



            // Fin de chartData
        } // Fin deState

        this.reciveDataDay = this.reciveDataDay.bind(this)

    }

    reciveDataDay(e) {


        console.log("reciveDataDay")

        let dateRaw = e

        let date = dateRaw.replace('/', '-').replace('/', '-')
        // Se reemplaza '/' por '-'  ->  2018/12/13 -> 2018-12-13

        let split = date.split('-')
        // Split "corta" el string por donde le señalamos '-' y mete en un
        // array cada pedazo: 2018-12-22 -> split[0]= 2018 ; split[1]= 12 ; split[2]= 22

        let year = split[0]

        let month = split[1]

        console.log(year)

        console.log(month)

        this.setState({

            dateData: date,
            month: month,
            year: year

        })

        // Petición al servidor con la información del DÏA
        axios({
            method: 'get',
            url: `http://${process.env.API_URI}/sensores/datos/search?dateSearch=${date}`,

        }).then(response => {

            console.log("Respuesta" + JSON.stringify(response))

            if (response.data.ok === true) { // Si OK === true es que la Respuesta llego bien.

                this.setState({
                    metricsDay: response.data.metrics,
                })
                this.setState({
                    metricsDayBoolean: true
                })

            }
            else {

                this.setState({
                    metricsDayBoolean: false
                })

            }
            console.log(this.state.metricsDay)

        })
            .catch(function (error) {
                console.log("Este es el error");
                console.log(error);
            });
        // Fin de la petición del Objeto metricsDay

        // Petición al servidor con la información del MES

        console.log("metricsMonth :")
        console.log(this.state.metricsMonth)

        console.log("Month :")
        console.log(month)
        console.log("Year :")
        console.log(year)


        axios({
            method: 'get',
            url: `http://${process.env.API_URI}/sensores/datos/${month}-${year}`,

        }).then(response => {

            if (response.data.ok === true) { // Si OK === true es que la Respuesta llego bien.

                this.setState({
                    metricsMonth: response.data.metrics.monthsArray
                })
                this.setState({
                    metricsMonthBoolean: true
                })

            }
            else {

                this.setState({
                    metricsMonthBoolean: false
                })

            }

        }).catch(function (error) {
            console.log("Este es el error");
            console.log(error);
        });
        // Fin de la petición del Objeto metricsDay

        console.log("metricsMonth")
        console.log(this.state.metricsMonth)
    }


    render() {

        console.log("Render")
        console.log(this.state.metricsDay)

        return (

        <CsaLayout>
            <div>
                <h1>Calidad de Aire</h1>
                <h2 className="teal-text center">{this.state.metric}</h2>
                <div className="row">
                    <h3 className="col s12 center ">Datos de día</h3>

                    <div className="col s12 center">

                        Seleccione el día que desee consultar.
                     <Calendar name="date" onChange={this.reciveDataDay}> </Calendar>

                    </div>
                </div>

                {
                    (this.state.metricsDayBoolean === true && this.state.metricsMonthBoolean === true)
                        ?
                        <Fragment>
                            <ModulesDayChart metrica={this.state.metrica} metric="AirQuality" unidad="%" metricsDay={this.state.metricsDay} dateData={this.state.dateData} />
                            <br />
                            <AverageDayChart metrica={this.state.metrica} metric="AirQuality" unidad="%" metricsDay={this.state.metricsDay} dateData={this.state.dateData} />
                            <br />
                            <ModulesMonthChart metrica={this.state.metrica} metric="AirQuality" unidad="%" metricsMonth={this.state.metricsMonth} dateData={this.state.dateData} />
                            <br />
                            <AverageMonthChart metrica={this.state.metrica} metric="AirQuality" unidad="%" metricsMonth={this.state.metricsMonth} dateData={this.state.dateData} />
                        </Fragment>
                        :
                        <h2>Ingresa una fecha con información</h2>
                }
            </div>
        </CsaLayout>
        
        )

    }
}

export default AirQuality

