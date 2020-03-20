import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title, imgUrl, size}) => {
	return (
		<div  className={`${size} menu-item`}>
			<div style={{backgroundImage : `url(${imgUrl})`}} className="background-image"/>
			<div className='content'>
				<div className='title'>{title.toUpperCase()}</div>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
		)
}

export default MenuItem;