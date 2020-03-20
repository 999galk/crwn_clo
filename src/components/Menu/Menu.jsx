import React from 'react';
import Sections from './SectionsData';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';

class Menu extends React.Component {
	constructor() {
		super();
		this.state = {
			sections : Sections
		}
	}

	render() {
		return(
			<div className="menu">
				{
					this.state.sections.map(({id, ...otherSectionProps}) => (
						<MenuItem key={id} {...otherSectionProps}/>
					))
				}
			</div>
			)
	}
}

export default Menu;