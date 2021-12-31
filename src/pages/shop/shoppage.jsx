import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from "../category/category.component"; 

const ShopPage = ({match}) => (

  <main className='mt-24'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </main>
);

export default ShopPage;
