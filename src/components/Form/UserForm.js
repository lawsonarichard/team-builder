import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPokemonDetails from './FormPokemonTeam';
import Confirm from './Confirm';
export class UserForm extends Component {

  //Step 1 import first name, last name and gender
  state = {
    step : 1,
    firstName: '',
    lastName: '',
    gender: '',
  }

  // Proceed to next Step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go back to the previous step

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // handles fields change

  handleChange = input => event => {
    this.setState({[input]: event.target.value});
  }

  render() {

    const { step } = this.state;
    const { firstName, lastName, gender} = this.state;
    const values = { firstName, lastName, gender}

    switch(step) {

      case 1: 
      return (
        <FormUserDetails 
          nextStep ={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      )

      case 2: 
        return (
          <FormPokemonDetails 
          nextStep = {this.nextStep}
          prevStep = {this.prevStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )    
      case 3:
          return (
            <Confirm
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            values = {values}
            />
          )    

      case 4:
        return <h1>Success</h1>
      
      }
    return (
      
      <div>
        
      </div>
    )
  }
}

export default UserForm

