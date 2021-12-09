import { Component } from "react";
import Button from "../../components/button";
import bg from './bg-example.jpg';
import Navbar from "../../components/navbar/navbar";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (

      <div className="2xl:mx-32">
        <Navbar />
        <section className="xl:flex items-center justify-around">
          <img
            src={bg} alt="this is the bg"
            className='w-full h-auto lg:h-72 xl:h-96'
          ></img>
          <article className="flex flex-col items-center p-4">
            <h1 className="m-4 font-play text-center text-4xl lg:text-5xl 2xl:text-7xl">The real beauty is inside of you</h1>
            <h4 className="m-2 font-open text-center">Click to see our collection</h4>
            <Button text="SHOP NOW" bgcolor="bg-salmon" />
          </article>
        </section>
      </div>
    )
  }
}

export default Homepage;