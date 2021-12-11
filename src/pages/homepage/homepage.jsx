import { Component } from "react";
import HeroSection from "../../components/hero-section/hero-section";
import CategoriesSection from "../../components/categories-section/categories-section";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="mt-24 2xl:mx-32">
        <HeroSection />
        <CategoriesSection />
      </div>

      // About??
      // New entries
    )
  }
}

export default HomePage;