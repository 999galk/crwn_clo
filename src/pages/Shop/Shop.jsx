import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection/Collection';

const ShopPage = ({match}) => {
	return(
		<div className='shopCollections'>
			<Route exact path={`${match.path}`} component={CollectionsOverview}/>
			<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
		</div>
	)
}

export default ShopPage;