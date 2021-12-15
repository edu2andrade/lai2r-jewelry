import { Component } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {

      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })

    } catch (error) {
      console.log('Error --> ', error);
    }

  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="flex flex-col items-center">
        <h2 className="py-4 text-2xl text-center">Already have an account?</h2>
        <p className="mb-8">Sign in with your email and password:</p>

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
        <p className="mt-4 text-xs font-bold">Don't have an account yet?</p>
        <Link to='/register'>
          <p className="text-xs font-bold underline cursor-pointer">Register</p>
        </Link>
      </div>
    )
  }
}

export default SignIn;