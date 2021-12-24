import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryCategories } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item";

const Directory = ({ categories }) => (
  <div className="flex flex-wrap justify-center items-center gap-4">
    {
      categories.map(({ id, ...otherCategoriesProps }) => (
        <MenuItem key={id} {...otherCategoriesProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories
})

export default connect(mapStateToProps)(Directory);