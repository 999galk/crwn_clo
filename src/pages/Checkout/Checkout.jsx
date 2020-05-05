import React from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

const CheckoutPage = ({cartItems, cartTotal, ...otherProps}) => {
	return(
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{
				cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )
			}
			<div className='total'>
				<span>Total: {cartTotal}$</span>
			</div>
			<div className='test-warning'>
				* Please use the following test credit cart for payments:*
				<br/>
				4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
			</div>
			<StripeCheckoutButton price={cartTotal} {...otherProps}/>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	cartTotal : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);