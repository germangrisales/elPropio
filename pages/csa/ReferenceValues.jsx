import React from "react";

import MySlider from "../../components/helpers/Slider.jsx"

import classNames from 'classnames';

import {
    Grid,SendIcon, IconButton, MenuIcon, Button
} from "../../components/helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

import CsaLayout from '../../components/CsaLayout.jsx'

// Peticiones al Servidor
import fetch from 'isomorphic-unfetch'


class ReferenceValues  extends React.Component {

    constructor(...props) {
         super(...props)

        console.log(this.props.referenceValues)

        if(this.props.referenceValues === undefined){

            this.setState({
                value: null,
                maxValueTemperature: null,
                minValueTemperature: null,

                maxValueHumidity: null,
                minValueHumidity: null,

                maxValueAirQuality: null,
                
                });

        
        
        }

        this.state = {

            value: null,
            maxValueTemperature: this.props.referenceValues.maxTemp,
            minValueTemperature: this.props.referenceValues.minTemp,

            maxValueHumidity: this.props.referenceValues.maxHum,
            minValueHumidity: this.props.referenceValues.minHum,

            maxValueAirQuality: this.props.referenceValues.maxAir,
        }

        this.handleGetMaxValueTemperature = this.handleGetMaxValueTemperature.bind(this)
        this.handleGetMinValueTemperature = this.handleGetMinValueTemperature.bind(this)

        this.handleGetMaxValueHumidity = this.handleGetMaxValueHumidity.bind(this)
        this.handleGetMinValueHumidity = this.handleGetMinValueHumidity.bind(this)

        this.handleGetMaxValueAirQuality = this.handleGetMaxValueAirQuality.bind(this)

        this.handleOnClickSendValues = this.handleOnClickSendValues.bind(this)

        
    }

    static async getInitialProps() {

        const res = await fetch(`http://${process.env.API_URI}/referencevalues`)

        const data = await res.json()

        console.log(data)
        console.log(data.latestReferenceValues)

        return { referenceValues: data.latestReferenceValues }
    }

    handleOnClickSendValues(){
    //Peticion fetch para enviar Nuevos valores de referencia:
    let SendReferenceValues = async () => {
        
        let response1 = await fetch(`http://${process.env.API_URI}/referencevalues`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    maxTemp: this.state.maxValueTemperature,
                    minTemp: this.state.minValueTemperature,

                    maxHum: this.state.maxValueHumidity,
                    minHum: this.state.minValueHumidity,

                    maxAir: this.state.maxValueAirQuality,

                    flag: true
                })
            })

        let response = await response1.json()

        console.log("response")
        console.log(response)

        const ValueRecived = response.ok
        console.log("Valores de referencia ENVIADOS: " + ValueRecived)
        
        console.log(this.state)
        }// fin SendReferenceValues
        
        SendReferenceValues() // Se ejecuta la función para enviar los datos
    
    }// fin handleOnClickSendValues

    // Temperatura:
    handleGetMaxValueTemperature(value) {
        this.setState({ maxValueTemperature: value });
    }
    handleGetMinValueTemperature(value) {
        this.setState({ minValueTemperature: value });
    }

    //Humedad:
    handleGetMaxValueHumidity(value) {
        this.setState({ maxValueHumidity: value });
    }
    handleGetMinValueHumidity(value) {
        this.setState({ minValueHumidity: value });
    }


    //Calidad de Aire:
    handleGetMaxValueAirQuality(value) {
        this.setState({ maxValueAirQuality: value });
    }


    render() {
        console.log("render")
        console.log(this.state)
        return (
        <CsaLayout>
            <div>
                <h1>Valores de Referencia</h1>

                <h2>Temperatura</h2>
                <p>Ingrese valores máximos y minimos:</p>

                    <MySlider label="Valor Máximo" unidad='ºC' sendValue={this.handleGetMaxValueTemperature} initialValue={this.state.maxValueTemperature} />

                    <MySlider label="Valor Mínimo" unidad='ºC' sendValue={this.handleGetMinValueTemperature} initialValue={this.state.minValueTemperature} />

                <h2>Humedad</h2>
                <p>Ingrese valores máximos y minimos:</p>

                    <MySlider label="Valor Máximo" unidad='%' sendValue={this.handleGetMaxValueHumidity} initialValue={this.state.maxValueHumidity} />

                    <MySlider label="Valor Mínimo" unidad='%' sendValue={this.handleGetMinValueHumidity} initialValue={this.state.minValueHumidity}/>

                <h2>Calidad de Aire</h2>
                <p>Ingrese valores máximos:</p>
                    <MySlider label="Valor Máximo" unidad='%' sendValue={this.handleGetMaxValueAirQuality} initialValue={this.state.maxValueAirQuality} />

                <Button onClick={this.handleOnClickSendValues} variant="contained" color="primary">
                   Enviar <br/> <SendIcon/>
                </Button>
            </div>
        </CsaLayout>
        )
    }
}


export default ReferenceValues