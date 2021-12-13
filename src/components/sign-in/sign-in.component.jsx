import { Component } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input.component";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password:</span>

        <form onSubmit={this.handleSubmit}>

          <label htmlFor="email">Email</label>
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <Button
            text="SIGN IN"
            textColor="text-platinum"
            bgColor="bg-darkGray"
            type="submit"
            value="Submit form"
          />

        </form>
      </div>
    )
  }
}

export default SignIn;