import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
	type : CartActionTypes.TOGGLE_CART_HIDDEN
})

//no need in payload in this case cause the reduces is changed the state value on its own (to the opposite of the original state)
export const addItem = item => ({
	type : CartActionTypes.ADD_ITEM,
	payload: item
})

export const clearItemFromCart = item => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload : item
})

export const removeItem = item => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload : item
})