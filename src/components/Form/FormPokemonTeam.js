import React, { useState, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import Select from "material-ui/SelectField";
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { makeStyles } from 'material-ui/styles';


const pokemon = [
    {
      name: "Bulbasaur",
      type: "Grass"
    },
    {
      name: "Charmander",
      type: "Fire"
    },
    {
      name: "Squirtle",
      type: "Water"
    }
  ];

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: 16
    },
    menu: {
      width: 200
    }
}));
const classes = useStyles();
const [values, setValues] = React.useState({});

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
      id="filled-select-currency"
      select
      label="Select"
      className={classes.textField}
      value={values.pokemon}
      onChange={handleChange("pokemon")}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      helperText="Select your starter Pokemer"
      margin="normal"
      variant="filled"
    >
      {pokemon.map(option => (
        <MenuItem key={option.name} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
                <br/>    
                    <Select
                            hintText="Starter Pokemon #2"
                            floatingLabelText="Starter Pokemon #2"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <br/>    
                    <Select
                            hintText="Starter Pokemon #3"
                            floatingLabelText="Starter Pokemon #3"
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
                        label="Back"
                        primary={false}
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
