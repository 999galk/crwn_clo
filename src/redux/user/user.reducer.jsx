const INITIAL_STATE = {
	currentUser:null
}

// in the following function we set a default value for the state parameter, it means that is state comes in as undefined when the function is called, it will be set to the default value.
//If value did come in , it will ignore the default value.
// This is important for the initiation
//Attention - null is considered a value! it only for cases of undefined

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type){
		case 'SET_CURRENT_USER' : 
			return {
				...state,
				currentUser : action.payload
			}

		default : 
			return state;
	}
} 

export default userReducer;