import { Component } from 'react';
import SHOP_DATA from './shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='mt-24'>
        {
          collections.map(({ id, ...otherCollectionProps }) => ( // spread other props here...
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
};

export default ShopPage;
