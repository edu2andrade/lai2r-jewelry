import { Component } from "react";
import { Link } from 'react-router-dom';
import Button from '../button/button';
import bg from '../../assets/images/bg-example.jpg';

class HeroSection extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <section className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="w-full h-auto max-w-sm md:max-w-2xl">
          <img src={bg} alt="beautiful necklace" className='object-cover min-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl'></img>
        </div>
        <article className="flex flex-col items-center p-4">
          <h1 className="m-2 font-play text-darkGray text-center text-4xl lg:text-5xl xl:text-6xl">The real beauty is inside of you</h1>
          <h4 className="m-2 text-darkGray text-center">Click to see our collection</h4>
          <Link to='/shop'>
            <Button
              text="SHOP NOW"
              styles="mt-4 text-platinum bg-camel border-camel"
            />
          </Link>
        </article>
      </section>
    )
  }
}
export default HeroSection;
