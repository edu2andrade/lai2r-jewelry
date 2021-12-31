import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item";


const CategoryPage = ({ category }) => {
    const { title, items } = category;
    return(
    <main className="collection-page flex flex-col items-center">
        <h2 className="title text-2xl mb-3">{title}</h2>
        <div className="items flex flex-wrap justify-center gap-4">
          {
            items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))
          }
        </div>
    </main>
)};

const mapStateToProps = (state, ownProps) => ({
    category: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);