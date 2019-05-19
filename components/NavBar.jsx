import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Login from '../pages/Login.jsx'


const styles = {

menuButton: {
    marginLeft: 12,
        marginRight: 20,
  },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
};
 
class NavBar extends React.Component {

    constructor(...props) {
        super(...props)

        this.state = {

            authed: false,
            token: "",

            form: {
                email: '',
                password: ''
            }

        }

       // this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleAuthentication = this.handleAuthentication.bind(this)
        
    }
  

    handleAuthentication(auth, token){
    // Se recibe auth desde el componente hijo Login.jsx
        console.log("Auth NavBar")
        console.log(auth)
        console.log("Token NavBar")
        console.log(token)
        
        this.props.handleAuthentication(auth,token)
        // Se envia la Authenticación al componente padre index.jsx
        console.log("Haz sido autenticado")

        // this.props.token(token)
        // console.log("Haz enviado el Token")
        // // Se envia el Token al componente padre index.jsx
        if (auth === true) {

            console.log("Dentro del if!")

            this.setState({
                authed: true,
                token: token
            })

          
        }
    }

    handleLogout() {

        this.setState({
            authed: false
        })

    }

render(){

    const { classes } = this.props;
    return (
        
            <AppBar position="static">
                <Toolbar> 
                    <Grid container justify="space-between">
                        <Grid item >
                            <Typography variant="h6" color="inherit">
                                CSA
                            </Typography>
                        </Grid>
                        <Grid item>
                          <Login token={this.token} handleAuthentication={this.handleAuthentication}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>        
    )
}

}


export default NavBar 