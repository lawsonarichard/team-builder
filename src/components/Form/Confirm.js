import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
export class Confirm extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values: { firstName, lastName, gender} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Trainer Data" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem
                            primaryText="Gender"
                            secondaryText={ gender }
                        />
                    </List>

                <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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
export default Confirm
