import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPokemonDetails extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Choose Your Pokemon" />
                    <TextField 
                        hintText="Starter Pokemon"
                        floatingLabelText="First Pokemon"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                <br/>    
                    <TextField 
                            hintText="Enter Your Last Name"
                            floatingLabelText="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <br/>    
                    <TextField 
                            hintText="Are you a Boy or Girl?"
                            floatingLabelText="Boy or Girl"
                            onChange={handleChange('gender')}
                            defaultValue={values.gender}
                        />
                <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                <br />
                    <RaisedButton
                        label="false"
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>

             
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormPokemonDetails
