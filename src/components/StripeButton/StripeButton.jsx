import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom';

const StripeCheckoutButton = ({ price,history }) => {
	// stripe takes payments in cents so we need to convert it to cents
	const priceForStripe = price *100;
	const publishableKey = 'pk_test_AzSaECDvqGLMq5pcjm79krAg00KZkknPhw';

	const onToken = token => {
		console.log(token);
		history.push('/');
	}
	
	return(
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton;