import { Component } from "react";
import Button from '../button';
import bg from '../../assets/bg-example.jpg';

class HeroSection extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <section className=" xl:flex items-center justify-around">
        <img
          src={bg} alt="beautiful necklace"
          className='w-full h-auto lg:h-72 xl:h-96'
        ></img>
        <article className="flex flex-col items-center p-4">
          <h1 className="m-2 font-play text-darkGray text-center text-4xl lg:text-5xl 2xl:text-7xl">The real beauty is inside of you</h1>
          <h4 className="m-2 text-darkGray text-center">Click to see our collection</h4>
          <Button text="SHOP NOW" bgcolor="bg-salmon" />
        </article>
      </section>
    )
  }
}
export default HeroSection;
