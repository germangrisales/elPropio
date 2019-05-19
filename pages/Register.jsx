import {
   SendIcon, withStyles, MenuItem, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, withMobileDialog
} from "../components/helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Meter Logo:
//import CSALogo from '../media/CSA.jpg'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    top: '80px',
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
});


class Register extends React.Component {

    constructor(...props){
        super(...props)
    
        this.state = { 
            open: false,
            form:{
              name:'', 
              email: '',
              phone: '',
              password: ''
            }
           
        }
        
      this.handleOnClick = this.handleOnClick.bind(this)
      this.handleClickOpen = this.handleClickOpen.bind(this)
      this.handleClose = this.handleClose.bind(this)
      this.handleChange = this.handleChange.bind(this)
      
      
    }

  handleOnClick() {

    console.log("Nombre:")
    console.log(this.state.form.name)

    console.log("E-mail:")
    console.log(this.state.form.email)

    console.log("Password:")
    console.log(this.state.form.password)

    console.log("Profesión:")
    console.log(this.state.form.profession)

    console.log("Descripción:")
    console.log(this.state.form.description)

    console.log("Telefono:")
    console.log(this.state.form.phone)

    let peticionAsincrona = async () => {
      let response1 = await fetch('http://192.168.1.25:3030/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.form.name,
          email: this.state.form.email,
          password: this.state.form.password,
          phone: this.state.form.phone
          
        })
      })

      let response = await response1.json()

      console.log("response")
      console.log(response)
  


      // CREAR EL AVATAR!
      // CONFIGURAR EL REGISTER PARA HACER EL POST!

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
      const { open, form: {name,email,phone,password} } = this.state;


    return (

    <Fragment>
        <Button color="inherit" onClick={this.handleClickOpen}>Registráte</Button>
        
        <Dialog // <Dialog> Aqui va todo el Register </Dialog>
          // fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          className={classes.container}
        >
          <DialogTitle id="responsive-dialog-title">
          
             {/* {CSAlogo}  */}
            
            CSA: Formulario de Registro.
          
          </DialogTitle>
          
          <DialogContent>
            {/* Aqui se mete el contenido */}
            
              <DialogContentText>
                Ingrese su información para crear una cuenta:
              </DialogContentText>

            <form onSubmit={this.handleOnSubmit} className={classes.container} noValidate autoComplete="off">
                
                <TextField
                  id="standard-name"
                  name="name"
                  label="Nombre y apellido"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange}
                  margin="normal"
                  autoComplete="name"
                />
              <br/>
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
                label="password"
                className={classes.textField}
                type="password"
                value={password}
                onChange={this.handleChange}
                autoComplete="current-password"
                margin="normal" 
              />
              <br />
              <TextField
                id="standard-number"
                name="phone"
                label="Teléfono"
                type="number"
                className={classes.textField}
                value={phone}
                onChange={this.handleChange}
                margin="normal"
                autoComplete="number"
              />
              
    
            </form>
          </DialogContent>


          <DialogActions>
            {/* Aqui se mete los botones que realizn acciones */}
           
            <div onClick={this.handleClose}>
              <Button onClick={this.handleOnClick} variant="contained" color="primary" className={classes.button}>
                Send
              <SendIcon className={classes.rightIcon} />
              </Button>
            </div>
          </DialogActions>
         
        </Dialog>
    </Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Register);