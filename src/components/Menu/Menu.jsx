import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import './Menu.scss';

const Menu = ({ sections }) => {
	return(
		<div className="menu">
			{
				sections.map(({id, ...otherSectionProps}) => (
					<MenuItem key={id} {...otherSectionProps}/>
				))
			}
		</div>
		)
}

const mapStateToProps = createStructuredSelector({
	sections : selectDirectorySections
})

export default connect(mapStateToProps)(Menu);