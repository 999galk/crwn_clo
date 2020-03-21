import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInUp.scss';

const SignInUp = () =>{
	return(
		<div className='sign-in-and-sign-up'>
			<SignIn/>
			<SignUp/>
		</div>
		)
}

export default SignInUp;