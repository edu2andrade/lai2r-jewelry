import { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import HeroSection from "../../components/hero-section/hero-section";
import CategoriesSection from "../../components/categories-section/categories-section";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="2xl:mx-32">
        <Navbar />
        <HeroSection />
        <CategoriesSection />
      </div>

      // Categories section
      // New entries
      // Footer
    )
  }
}

export default Homepage;