import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/lab/Slider'

const styles = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
};

class MySlider extends React.Component {
    
    constructor(...props) {
        super(...props)
    
        this.state = {

             value: this.props.initialValue,
        }

    }

    handleChange = (event, value) => {
        this.setState({ value });
        this.props.sendValue(value)
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Typography id="label">{this.props.label}: {this.state.value}{this.props.unidad}</Typography>
                <Slider
                    classes={{ container: classes.slider }}
                    value={value}
                    aria-labelledby="label"
                    onChange={this.handleChange}
                    min={0}
                    max={100}
                    step={1}
                    
                />
            </div>
        );
    }
}

MySlider.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySlider);