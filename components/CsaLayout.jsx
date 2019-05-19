import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    WbIncandescentIcon, VisibilityIcon, SettingsRemoteIcon, WifiTetheringIcon, ToysIcon, WhatshotIcon, CloudIcon, ListItemText, List, WbSunnyIcon, ListItemIcon, ListItem, Divider, Grid, ChevronLeftIcon, Drawer, Typography, MenuIcon, IconButton, AppBar, Toolbar, CssBaseline, SendIcon, DialogActions, AccountCircleIcon, TextField, DialogContentText, DialogContent, DialogTitle, Dialog, withStyles, Button,
} from "../components/helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

//Router for Next.js
import Router from 'next/router';
//Para recuperar la query string: {props.router.query.constante}
import { withRouter } from 'next/router';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class CsaLayout extends React.Component {

    constructor(...props) {
        super(...props)

        this.state = {
            open: false,
            name: '',
            email: '',
            token: '',
            authed: null
        }

        this.handleLogout = this.handleLogout.bind(this)

    }

    handleLogout() {

        console.log("Logout")

        this.setState({
            authed: false,
        })
        Router.push('/')
    }
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>


                        <Grid container
                            spacing={16}
                            //className={classes.demo}
                            alignItems="center"
                            direction="row"

                        >
                            <Grid item xs={9}>
                                <Typography variant="h6" color="inherit" noWrap>
                                    CSA: Control Avícola
                            </Typography>
                            </Grid>

                            <Grid xs={2} item> <Button onClick={this.handleLogout} color="inherit" >Logout</Button></Grid>

                        </Grid>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>

                    </div>

                    <Divider/>

                    <ListItem onClick={() => Router.push('/csa/Temperature')} button>
                        <ListItemIcon>  <WbSunnyIcon /> </ListItemIcon>
                        <ListItemText primary={"Temperatura"} />
                    </ListItem>

                    <ListItem onClick={() => Router.push('/csa/Humidity')} button>
                        <ListItemIcon>  <CloudIcon /> </ListItemIcon>
                        <ListItemText primary={"Humedad"} />
                    </ListItem>

                    <ListItem onClick={() => Router.push('/csa/AirQuality')} button>
                        <ListItemIcon> <ToysIcon/> </ListItemIcon>
                        <ListItemText primary={"Calidad de Aire"} />
                    </ListItem>

                    <ListItem onClick={() => Router.push('/csa/ReferenceValues')} button>
                        <ListItemIcon> <SettingsRemoteIcon /> </ListItemIcon>
                        <ListItemText primary={"Valores de Referencia"} />
                    </ListItem>

                    <ListItem onClick={() => Router.push('/csa/Actuators')} button>
                        <ListItemIcon>  <WbIncandescentIcon /> </ListItemIcon>
                        <ListItemText primary={"Actuadores"} />
                    </ListItem>

                    <ListItem onClick={() => Router.push('/csa/RealTime')} button>
                        <ListItemIcon>  <VisibilityIcon/> </ListItemIcon>
                        <ListItemText primary={"Tiempo Real"} />
                    </ListItem>



                    <Divider />

                </Drawer>
                <main className={classes.content}>
                <div className={classes.toolbar} />

                    {this.props.children}

                </main>
            </div>
        );
    }
}

CsaLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CsaLayout);