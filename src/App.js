import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import SignInUp from './pages/SignInUp/SignInUp';
import Header from './components/Header/Header';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			currentUser:null
		}
	}

	unsubscribeFromAuth = null;
	componentDidMount() {
	    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
	      this.setState({ currentUser: user });

	      console.log(user);
	    });
	  }

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	 }

	render() {
	  	return (
		    <div className="App">
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path='/' component={HomePage}/>
			        <Route path='/shop' component={ShopPage}/>
			        <Route path='/signin' component={SignInUp}/>
			    </Switch>
		    </div>
		);	
	}
  
}

export default App;
