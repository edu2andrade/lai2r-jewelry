import React from "react";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from "../form-input/form-input.component";
import Button from '../button/button';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;


    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    try {
      // New auth method here...
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error) {
      console.log("Error --> ", error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="flex flex-col items-center">

        <h2 className="py-4 text-2xl text-center">Don't have an account yet?</h2>
        <span className="mb-8">Register with your email and password:</span>

        <form className="py-2 flex flex-col items-center" onSubmit={this.handleSubmit}>

          <label htmlFor="displayName">Name</label>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <label className="mt-4" htmlFor="email">Email</label>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <label className="mt-4" htmlFor="password">Password</label>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <label className="mt-4" htmlFor="confirmPassword">Confirm password</label>
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />

          <Button
            text="REGISTER"
            styles="mt-8 text-platinum bg-camel border-camel"
            type="submit"
          />

        </form>
      </div>
    )
  }
}

export default Register;