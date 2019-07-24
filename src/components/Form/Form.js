import React, { useState } from "react";

//Build inputs for name, email and role (backend engineer, frontend engineer, designer, etc. Use your imagination)

const Form = () => {
    const [user, setUser] = useState({ username: "", password: "" });

    const handleChange = event => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      console.log(user.name);
      console.log(user.password);
    };


return (

<form onSubmit={event => handleSubmit(event)}>
  <label>
    Trainer Name:
    <input
      type="text"
      name="username"
      value={user.name}
      onChange={event => handleChange(event)}
    />
  </label>
  <label>
    Password:
    <input
      type="text"
      name="password"
      value={user.password}
      onChange={event => handleChange(event)}
    />
  </label>
  <button>Submit!</button>
</form>
);
};
export default Form;
