import React from "react";
import MenuItem from "./menu-item";
import necklaces from "./images/necklaces.jpg"
import bracelets from "./images/bracelets.jpg"
import earrings from "./images/earrings.jpg"
import rings from "./images/rings.jpg"

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          title: 'Necklaces',
          imageSrc: necklaces,
          id: 1
        },
        {
          title: 'Rings',
          imageSrc: rings,
          id: 2
        },
        {
          title: 'Earrings',
          imageSrc: earrings,
          id: 3
        },
        {
          title: 'Bracelets',
          imageSrc: bracelets,
          id: 4
        },
      ]
    }
  }
  render() {
    return (
      <div className="flex flex-wrap justify-evenly items-center">
        {
          this.state.categories.map(({ id, title, imageSrc }) => (
            <MenuItem key={id} title={title} imageSrc={imageSrc} />
          ))
        }
      </div>
    )
  }
}

export default Directory;