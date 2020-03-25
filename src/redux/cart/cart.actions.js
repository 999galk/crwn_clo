import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
	type : CartActionTypes.TOGGLE_CART_HIDDEN
})

//no need in payload in this case cause the reduces is changed the state value on its own (to the opposite of the original state)
