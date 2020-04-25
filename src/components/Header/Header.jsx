import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hidden}) => {
	return (
		<div className='header'>
			<Link className='logo-container' to="/">
				<Logo className='logo'/>
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>SHOP</Link>
				{
					currentUser ?
					<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
					: (<Link className='option' to='/signin'>LOGIN</Link>)
				}
				<CartIcon/>
			</div>
			{
				hidden ? null : <CartDropdown/>
			}
		</div>
		)
}

const mapStateToProps = createStructuredSelector ({
	currentUser : selectCurrentUser,
	hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);