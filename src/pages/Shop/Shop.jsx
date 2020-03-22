import React from 'react';
import SHOP_DATA from './Collections';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component{
	constructor(props){
		super(props);

		this.state={
			collections : SHOP_DATA
		}
	}

	render(){
		return(
			<div className='shopCollections'>
			{
				this.state.collections.map(({id, ...otherCollectionProps}) => (
						<CollectionPreview key={id} {...otherCollectionProps}/>
						))
			}
			</div>
			)
	}
}

export default ShopPage;