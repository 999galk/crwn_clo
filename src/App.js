import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';


import './App.css';

const Hats = props => {
	console.log(props);
	return(
		<div>
			<h1>Hats</h1>
		</div>
		)
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
