import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Grid from '@material-ui/core/Grid';

import CsaLayout from '../../components/CsaLayout.jsx'

class Sockets extends Component {

    constructor(...props) {

        super(...props)

        this.state = {

            response: {},

            temperature: [],

            humidity: [],

            airQuality: [],

            fire: [],

            rain:" ",

            light: " ",

            actuators:[ ],

            endpoint: process.env.LOCAL_URI
        };

    }

    componentDidMount() {

        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);

        socket.on('connect', () => {
            console.log('conectado con el servidor front!')

        })

        socket.on('disconnect', () => {
            console.log('desconectado con el servidor front!')
        })
        
        socket.on("realTime", data => 
        
            this.setState({
                response: JSON.parse(data),
                temperature: JSON.parse(data).temperature,
                humidity: JSON.parse(data).humidity,
                fire: JSON.parse(data).fire,
                airQuality: JSON.parse(data).airQuality,
                rain: JSON.parse(data).others.rain,
                light: JSON.parse(data).others.light,
                actuators: JSON.parse(data).actuadores
            }));

        console.log("DidMount Respuesta de Socket IO:")      
        console.log(this.state.response)
    }

    componentWillReceiveProps() {

        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("realTime", data => 
        
            this.setState({
                response: JSON.parse(data),
                temperature: JSON.parse(data).temperature,
                humidity: JSON.parse(data).humidity,
                fire: JSON.parse(data).fire,
                airQuality: JSON.parse(data).airQuality,
                rain: JSON.parse(data).others.rain,
                light: JSON.parse(data).others.light,
                actuators: JSON.parse(data).actuadores
            }));

        console.log("WillRecibeProps Respuesta de Socket IO:")
        console.log(this.state.response)
    }

    render() {
    
        const { response, temperature, humidity, fire, airQuality, rain, light, actuators } = this.state;
        console.log("Response Render(){ } :")
        console.log(this.state.response)
        
        
        return (
        <CsaLayout >
            <div style={{ textAlign: "center" }}>
                
                <h1> Medición de Sensores Tiempo Real</h1>
                {response
                    ? (<p>
                    <Grid container>

                    <Grid item xs={3}>
                        Módulo:
                          <p>Modulo 1:</p>
                          <p>Modulo 2:</p>
                          <p>Modulo 3:</p>
                          <p>Modulo 4:</p>
                    </Grid>
                            
                    <Grid item xs={2}>
                        Temperatura:
                        <p> {temperature[0]} ºC</p>
                        <p> {temperature[1]} ºC</p>
                        <p> {temperature[2]} ºC</p>
                        <p> {temperature[3]} ºC</p>
                    </Grid>     

                    <Grid item xs={2}>
                        Humedad:
                        <p>{humidity[0]} %</p>
                        <p>{humidity[1]} %</p>
                        <p>{humidity[2]} %</p>
                        <p>{humidity[3]} %</p>
                    </Grid>

                    <Grid item xs={2}>
                        Fuego:
                        <p>{fire[0]}</p>
                        <p>{fire[1]}</p>
                        <p>{fire[2]}</p>
                        <p>{fire[3]}</p>
                    </Grid>

                    <Grid item xs={2} >
                        Calidad de Aire:
                        <p>{airQuality[0]}</p>
                        <p>{airQuality[1]}</p>
                        <p>{airQuality[2]}</p>
                        <p>{airQuality[3]}</p>
                    </Grid>

<br/>
                    <Grid container >
                
                    <Grid item xs={4} >
                            Sensor Lluvia:{rain}
                    </Grid>

                    <Grid item xs={4} >
                                        Actuadores:
                                        <p> Luz: {actuators[0] ? ("ON") : ("OFF")}</p>
                                        <p> Ventiladores: {actuators[1] ? ("ON") : ("OFF")}</p>
                    
                    </Grid>

                    <br/>

                    <Grid item xs={4} >
                        Sensor Luz: {light}
                    </Grid>
                 </Grid>  
             </Grid>
                    </p>)
                    : (<p>Loading...</p>)
                    
                    }
            </div>
            </CsaLayout>
        );
    }
}

export default Sockets