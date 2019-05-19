import React from "react";
import MySlider from "../../components/helpers/Slider.jsx"
import Switches from '../../components/helpers/Switches.jsx';

import axios from 'axios';

import CsaLayout from '../../components/CsaLayout.jsx'

class Actuadores extends React.Component {

    constructor(...props) {
        super(...props)

        this.state = {
            actuators:[ ],
            luces: null, // Se cambia a null en uso real
            ventiladores: null, // Se cambia a null en uso real 
            flag: true

        }
        

        axios({
            method: 'get',
            url: `http://${process.env.API_URI}/actuators`,

        }).then(response => {

            console.log(response)

            console.log(response.data)

            const actuators = response.data.latestActuators.actuators
            
            console.log(actuators)
            
            this.setState({
                actuators: actuators
            })
            console.log("Actuadores: Valores anteriores")
            console.log(this.state.actuators)

            const luces = response.data.latestActuators.actuators[0]
            // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF

            const ventiladores = response.data.latestActuators.actuators[1]
            // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF

            console.log("Luces: " + luces)
            console.log("Ventilador: " + ventiladores)
            // Se confirma el estado en el que esten


            if (luces === 1) { // Si está prendido = 1 <---> setea el estado en True

                this.setState({
                    luces: true,
                })
            }
            if (luces === 0) { // Si está prendido = 0 <---> setea el estado en False
                this.setState({
                    luces: false,
                })
            }

            if (ventiladores === 1) {// Si está prendido = 1 <---> setea el estado en True

                this.setState({
                    ventiladores: true,
                })
            }
            if (ventiladores === 0) {// Si está prendido = 0 <---> setea el estado en False
                this.setState({
                    ventiladores: false,
                })
            }

           
        }) .catch(function (error) {
                console.log("Este es el error");
                console.log(error);
            });   
    }

    componentWillMount(){
        // Petición al servidor con la información del Día
        
        axios({
            method: 'get',
            url: `http://${process.env.API_URI}/actuators`,

        }).then(response => {

            console.log(response.data)

            if (response.data.length !== 0){
                const actuators = response.data.latestActuators.actuators

                this.setState({
                    actuators: actuators
                })
                console.log("Actuadores: Valores anteriores")
                console.log(this.state.actuators)

                const luces = response.data.latestActuators.actuators[0]
                // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF

                const ventiladores = response.data.latestActuators.actuators[1]
                // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1Actuatos
                if (luces === 1) { // Si está prendido = 1 <---> setea el estado en True

                    this.setState({
                        luces: true,
                    })
                }
                if (luces === 0) { // Si está prendido = 0 <---> setea el estado en False
                    this.setState({
                        luces: false,
                    })
                }

                if (ventiladores === 1) {// Si está prendido = 1 <---> setea el estado en True

                    this.setState({
                        ventiladores: true,
                    })
                }
                if (ventiladores === 0) {// Si está prendido = 0 <---> setea el estado en False
                    this.setState({
                        ventiladores: false,
                    })
                }

            }// Fin del if si hay Datos?
        else{
            console.log("No hay datos desde BD")
        }
           
            console.log("Luces: " + luces)
            console.log("Ventilador: " + ventiladores)
            // Se confirma el estado en el que esten

        })
            .catch(function (error) {
                console.log("Este es el error");
                console.log(error);
            });   
           
    }
   
    render() {
       
        return (
        <CsaLayout >
            <div>
                <h1>Actuadores</h1>
                <Switches token={this.state.token} actuators={this.state.actuators} luces={this.state.luces} ventiladores={this.state.ventiladores} />
                
            </div>
        </CsaLayout>
        
        )
    }
}

// ""FALTA PROGRAMAR EL TOKEN."
export default Actuadores 