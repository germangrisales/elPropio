import {
   SendIcon, DialogActions, AccountCircleIcon, TextField, DialogContentText, DialogContent, DialogTitle, Dialog, withStyles, Button 
} from "../components/helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

import React,{Fragment} from 'react';
import { // Se importa react-router-dom y unos objetos necesarios
  BrowserRouter,  // Se le asigna un 'Alias' para asiganrle el nombre de las versiones anteriores y hacerlos compatibles.
  Route, // Objeto para el manejo de rutas.
  Link,// Objeto para el manejo de Enlaces
  Redirect,// Objeto para el manejo de Redireciones
  withRouter,// Objeto para hacer Switch para modificar el valor de una ruta
  Switch
} from 'react-router-dom'

import PropTypes from 'prop-types';
import classNames from 'classnames';

//componentes
import Register from './Register.jsx'

// Peticiones al Servidor
import fetch from 'isomorphic-unfetch'

// Router de next.js    
import Router from 'next/router';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    top:'80px',
    left: '350px'

  },
  textField: {
    width: 500,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  containe: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1.5em',
  },
  item: {
    verticalAlign:'middle',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});


class Login extends React.Component {

    constructor(...props){
        super(...props)
    
        this.state = { 

            authed:'',
            open: false,
            token: "knmslkfmsdlfmsfdfm,",    
            form:{
              email: '',
              password: ''
            }
           
        }
        
       // this.handleOnSubmit = this.handleOnSubmit.bind(this)
      this.handleClickOpen = this.handleClickOpen.bind(this)
      this.handleClose = this.handleClose.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleOnClick = this.handleOnClick.bind(this)
     
      
    }

  handleOnClick(){

    console.log("E-mail:")
    console.log(this.state.form.email)
    
    console.log("Password:")
    console.log(this.state.form.password)
    
    let   peticionAsincrona = async () => {
      // Sustituir por la que viene
      let response1 = await fetch(`http://${process.env.API_URI}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.form.email,
          passwd: this.state.form.password
        })
      })
      
      let response = await response1.json()
      
      console.log("response")
      console.log(response)
      const auth = response.ok
      const token = response.token
      const user = response.user

      console.log("authenticated:")
      console.log(auth)
      console.log("Token:")
      console.log(token)
      console.log("Usuario:")
      console.log(user)

      const name = response.user.name
      const email = response.user.email
      const role = response.user.role
     
      console.log(name)
      console.log(email)
      console.log(role)
     
      // CREAR EL AVATAR!
      // CONFIGURAR EL REGISTER PARA HACER EL POST!



      if (auth === true) {

                    console.log("Dentro del if!")

                    this.setState({
                        authed: true,
                        token: token
                    })
                    
                 // this.props.handleAuthentication(auth,token)
                    console.log("Haz sido autenticado")
                    console.log("Haz Enviado a CSA")
                    Router.push("/csa")
       }
       else{
          alert("Usuario o/y contraseña INCORRECTA/S")
       }
      
    }

    peticionAsincrona()
    // Ejecuta la petición Asincrona  
  }

  handleClickOpen(){
    this.setState({ open: true })
  }

  handleClose(){
    this.setState({ open: false })
  }

  handleChange(e) {

    console.log(e.target) //+ " name:"+name 
    console.log(this.state)
    

    const { target: {name,value} } = e

    this.setState({
        
        form:{
            ...this.state.form,
            [name]: value
        } 
    })
  
  }


  render() {
    const { classes } = this.props;
    const { open, form:{email, password} } = this.state;


    return (
      <Fragment >

        <Button color="inherit" onClick={this.handleClickOpen}>Login</Button>
        
        <Dialog // <Dialog> Aqui va todo el Login </Dialog>
          // fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          className={classes.container}
        >
          <DialogTitle id="responsive-dialog-title">
          
             {/* {CSAlogo}  */}
            
            CSA: Control Sistematizado Avícola
          
          </DialogTitle>
          
          <DialogContent>
            {/* Aqui se mete el contenido */}
            
              <DialogContentText>
                Ingrese su información para validar el acceso:
              </DialogContentText>

            <form onSubmit={this.handleOnSubmit} className={classes.container} noValidate autoComplete="off">

              <TextField
                name="email"
                label="E-mail"
                className={classes.textField}
                type = "email"
                value = {email}
                onChange={this.handleChange}
                autoComplete="email"
                margin="normal"
                variant="filled"
              />
              <br/>
              <TextField
                id="standard-password-input"
                name="password"
                label="Contraseña"
                className={classes.textField}
                type="password"
                value={password}
                onChange={this.handleChange}
                autoComplete="current-password"
                margin="normal" 
              />
    
            </form>
            <br/>
            <DialogContentText className={classes.containe}>
              No estas registrado?
              <br />
            <div className={classes.containe}>
            
             <Register className={classes.item}/>
            
              <AccountCircleIcon className={classes.item}/>

            </div>    
            </DialogContentText>


          </DialogContent>

          <DialogActions>
            {/* Aqui se mete los botones que realizn acciones */}
           

            <Button onClick={this.handleOnClick} variant="contained" color="primary" className={classes.button}>
              Send
            <SendIcon className={classes.rightIcon} />
            </Button>

          </DialogActions>
        </Dialog>
    </Fragment>

    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);