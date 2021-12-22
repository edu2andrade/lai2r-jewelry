import React from "react";
import { connect } from "react-redux";
import { selectCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <>
    {
      collections.map(({ id, ...otherCollectionProps }) => ( // spread other props here...
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);