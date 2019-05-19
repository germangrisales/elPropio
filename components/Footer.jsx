import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Grid from '@material-ui/core/Grid';
import indigo from '@material-ui/core/colors/indigo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    iconHover: {
        '&:hover': {
            color: indigo[300],
        },
    },
});

function Footer(props) {
    const { classes } = props;
        
        return (
            <Grid container spacing={8} justify="center">
                
                <Grid item xs={12} >
                    <Typography  variant="title" align="center" gutterBottom>
                        CSA
                    </Typography>
                </Grid>
                <Grid item xs={3}/>
                <Grid item xs={2} >
                    <Typography variant="h4" align="center" color='primary' gutterBottom>
                        <a target="_blank" href="https://www.facebook.com">
                        <FontAwesomeIcon className={classes.iconHover} icon={['fab', 'facebook-square']}/>
                        </a>
                        
                    </Typography>
                </Grid>

                <Grid itemxs={2} >
                    <Typography variant="h4" align="center" color='primary' gutterBottom>
                        <a target="_blank" href="https://www.twitter.com">

                        <FontAwesomeIcon className={classes.iconHover} icon={['fab', 'twitter']} />
                        </a>
                    </Typography>
                </Grid>

                <Grid item xs={2} >
                    
                    <Typography variant="h4" align="center" color='primary' gutterBottom>
                        <a target="_blank" href="https://www.instagram.com/">
                        <FontAwesomeIcon  className={classes.iconHover} icon={['fab', 'instagram']} />
                        </a>
                    </Typography>
                </Grid>
                <Grid item xs={3}/>

                <Grid item xs={12}>  
                    
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                         Universidad Autónoma del Caribe.
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Copyright © Nestor Estrada y Germán Grisales. 2019.
                    </Typography>
                </Grid> 
                

            </Grid> 
        );
    }

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)