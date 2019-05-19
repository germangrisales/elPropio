import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// React+fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faFacebookSquare, faInstagram, faTwitterSquare)
// Se deben declarar los iconos para que esten disponibles en todos los componentes



//../Components
import Layout from '../components/Layout.jsx'
import Register from './Register.jsx'
import Footer from '../components/Footer.jsx'

//Router for Next.js
import Router from 'next/router';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        background: '#cfd8dc',
        padding: theme.spacing.unit * 3,
    },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Home(props) {
    const { classes } = props;

    return (
    <Layout>
        <React.Fragment>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                                CSA: Control Avícola
            </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Herramienta versatil y fidedigna para la supervisión de la operación productiva,
            </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        <Register/>
                                     </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                            
                        {/* CARD 1 */}
                        <Grid item sm={6} md={4} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="../static/csa.png" // eslint-disable-line max-len
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    monitoreo Electrónico
                                    </Typography>
                                    <Typography>
                                        Supervisión en tiempo real de variables influyentes en el proceso de crianza de aves con fines productivos.
                                    </Typography>
                                </CardContent>
                                
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        {/* Fin CARD1 */}

                        {/* CARD 3 */}
                        <Grid item sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="../static/conection.png" // eslint-disable-line max-len
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Conexión Global
                                    </Typography>
                                    <Typography>
                                        Interface web para administración de información generada por el sistema de manera remota.
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        {/* Fin CARD 3 */}

                        {/* CARD 2 */}
                        <Grid item sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="../static/almacenamiento.png" // eslint-disable-line max-len
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Almacenamiento
                                    </Typography>
                                    <Typography>
                                        Consulta de información almacenada en la base de datos de cada sensor por fecha y hora.
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        {/* Fin CARD 2 */}
     
                    </Grid>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Footer/>
            </footer>
            {/* End footer */}
        </React.Fragment>
    </Layout>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
