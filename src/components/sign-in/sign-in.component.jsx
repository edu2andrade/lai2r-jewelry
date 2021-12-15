import { Component } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

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
      <div className="flex flex-col items-center">
        <h2 className="py-4 text-2xl text-center">Already have an account?</h2>
        <span className="mb-8">Sign in with your email and password:</span>

        <form className="py-2 flex flex-col items-center" onSubmit={this.handleSubmit}>

          <label htmlFor="email">Email</label>
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <label className="mt-4" htmlFor="password">Password</label>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <Button
            text="SIGN IN"
            styles="mt-8 text-platinum bg-camel border-camel"
            type="submit"
          />

          <Button
            text="SIGN IN WITH GOOGLE"
            styles="mt-2 text-platinum bg-black border-black"
            onClick={signInWithGoogle}
          />

        </form>
      </div>
    )
  }
}

export default SignIn;