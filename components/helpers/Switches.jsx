import React from 'react';

import {
    WbIncandescentIcon, withStyles, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, MenuIcon, Button, LocationOnIcon, WbSunnyIcon, CloudIcon, WhatshotIcon, ToysIcon, WifiTetheringIcon, ChevronLeftIcon, ChevronRightIcon, ListItem, ListItemIcon, ListItemText, InboxIcon, MailIcon, Paper, Grid
} from "./MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

     // CREAR EL AVATAR!
            // CONFIGURAR EL REGISTER PARA HACER EL POST!

const styles = theme => ({
    lightOn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'yellow',
        borderRadius: '50px',
        height: "100px",
        width: "100px",
    },
    lightOff: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'grey',
        borderRadius: '50px',
        height: "100px",
        width: "100px",
    }

})

class Switches extends React.Component {
   
    constructor(...props) {

        super(...props)

        this.state = {
            
            luces: this.props.luces,
            ventiladores: this.props.ventiladores
        }

        this.handleOnClickLight = this.handleOnClickLight.bind(this)
        this.handleOnClickFan = this.handleOnClickFan.bind(this)

    }

    handleOnClickLight(){

        console.log("Click Click Click Click Click en LUCES")

        const actuators = this.props.actuators
        console.log("Actuadors Estado Anterior")
        console.log(actuators)

        let newActuators

        let OnFlag

        if (actuators[0] === 1){
           
            console.log("IF:Actuadors Anterior")

            actuators[0] = 0

            OnFlag = false;

            console.log("IF: Actuadors Con cambio")
            console.log(actuators)
        }
        else {
            console.log("ELSE: Actuadors Anterior")
            console.log(actuators)

            actuators[0] = 1
            OnFlag = true;

            console.log("ELSE: Actuadors Con cambio")
            console.log(actuators)
        }

       // const token = this.props.token
       // programar que cuando envie el post tambien envie el TOKEN

        console.log("New Actuadors: Fuera del if")
        console.log(actuators)

        let peticionAsincrona = async () => {
            let response1 = await fetch(`http://${process.env.API_URI}/actuators`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    actuators: actuators,
                    flag: true,
                    switch: 'app'
                })
            })

            let response = await response1.json()

            console.log("response: ")
            console.log(response)
    
            // CREAR EL AVATAR!
            // CONFIGURAR EL REGISTER PARA HACER EL POST!

            if (response.ok === true && OnFlag=== true) {

                console.log("LUCES ON: Cambio resgistrado BD")

                this.setState({
                    luces: true
                })
            } if (response.ok === true && OnFlag === false) {

                console.log("LUCES OFF: Cambio resgistrado BD")

                this.setState({
                    luces: false
                })
            }
         
        }
        peticionAsincrona()
        // Ejecuta la petición Asincrona  
    
    }

    handleOnClickFan() {

        const actuators = this.props.actuators
        console.log("Actuadors Estado Anterior")
        console.log(actuators)

        console.log("Click Click Click Click Click en Vetiladores")

        let newActuators

        let OnFlag

        if (actuators[1] === 1) {
            
            console.log("IF:Actuadors Anterior")
            
            actuators[1]=0
            
            OnFlag = false;

            console.log("IF: Actuadors Con cambio")
            console.log(actuators)
        }
        else {

            console.log("ELSE: Actuadors Anterior")
            console.log(actuators)

            actuators[1] = 1
            OnFlag = true;

            console.log("ELSE: Actuadors Con cambio")
            console.log(actuators)
        }

        // const token = this.props.token
        // programar que cuando envie el post tambien envie el TOKEN

        console.log("New Actuadors: Fuera del if")
        console.log(actuators)

        let peticionAsincrona = async () => {
            let response1 = await fetch(`http://${process.env.API_URI}/actuators`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    actuators: actuators,
                    flag: true,
                    switch: 'app'
                })
            })

            let response = await response1.json()

            console.log("response: ")
            console.log(response)

            // CREAR EL AVATAR!
            // CONFIGURAR EL REGISTER PARA HACER EL POST!

            if (response.ok === true && OnFlag === true) {

                console.log("VENTILADORES ON: Cambio resgistrado BD")

                this.setState({
                    ventiladores: true
                })
            } if (response.ok === true && OnFlag === false) {

                console.log("VENTILADORE OFF: Cambio resgistrado BD")

                this.setState({
                    ventiladores: false
                })
            }

        }
        peticionAsincrona()
        // Ejecuta la petición Asincrona  
    }
    
    componentWillReceiveProps(){

        this.setState({
            luces: this.props.luces,
            ventiladores: this.props.ventiladores
         });
    }

    render() {
        const { classes } = this.props
        return (

      
        
                <Grid container spacing={16}>

                <Grid item xs={6}>

                        <Button onClick={this.handleOnClickLight} variant="contained" color="primary" >
                            Luces
                        </Button>
                        {/* Luces: Si está ON -->Off */}
                        {
                            this.state.luces === true
                                ? (
                                    <ListItemIcon className={classes.lightOn}>
                                        <WbIncandescentIcon size="large" color="disable" />
                                    </ListItemIcon>
                                )

                                : (
                                    <ListItemIcon className={classes.lightOff}>
                                        <WbIncandescentIcon size="large" color="disable" />
                                    </ListItemIcon>
                                )
                        
                        }


                
                        
                
                    </Grid>

                    <Grid item xs={6}>


                    <Button onClick={this.handleOnClickFan} variant="contained" color="primary" >
                        Ventiladores
                    </Button>
                    {/* Luces: Si está ON -->Off */}
                    {
                        this.state.ventiladores === true
                            ? (
                                <ListItemIcon className={classes.lightOn}>
                                    <ToysIcon size="large" color="disable" />
                                </ListItemIcon>
                            )

                            : (

                                <ListItemIcon className={classes.lightOff}>
                                    <ToysIcon size="large" color="disable" />
                                </ListItemIcon>
                            )

                    }

                       
                    </Grid>

                </Grid>

                
       
        );
    }
}

export default withStyles(styles)(Switches);