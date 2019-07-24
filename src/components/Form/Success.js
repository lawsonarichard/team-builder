import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    };

    render() {
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1> Thank you for your submission </h1>
                    <p> Your journey begins now... </p>
                </React.Fragment>
            </MuiThemeProvider>

             
        );
    }
}

export default Success
