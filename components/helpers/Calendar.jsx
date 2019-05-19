import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Calendar extends Component {

    constructor(...props) {
        super(...props)

        this.state = {
            // Estado
            startDate: moment().format("YYYY/MM/DD")
            // Fecha inicial Ninguna
        }

        this.handleChange = this.handleChange.bind(this)

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleChange(e) {

        console.log(e.target.value)

        let dateSelected = e.target.value

        // Iguala el estado con la fecha (Que elige el usuario) cuando haya un cambio

        this.setState({
            startDate: dateSelected // Parametro que recibe el manejador
        })

        this.props.onChange(dateSelected)
        // Se ejecuta el método reciveDataDay() declarado en el padre que se pasó como
        // props: onChange = {this.reciveDataDay} y que devuelva el valor de date
    }

    handleOnChange() {
        console.log(this.state.startDate)
    }



    render() {
        const { classes } = this.props
        return (

            <form className={classes.container} noValidate>
                <TextField
                    id={this.props}
                    label="Fecha"
                    type="date"
                    name={this.props}
                    onChange={this.handleChange}
                    onClick={this.handleOnChange}
                    defaultValue={this.state.startDate}
                    value={this.state.startDate}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        )
    }
}

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
