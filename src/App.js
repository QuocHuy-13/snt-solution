import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import CatBreeds from './components/CatBreeds/CatBreeds';
import Login from './components/Login/Login';
import React from 'react';

function App() {

  return (
    <div className="App">
        <Switch>
          <Route path="/catbreeds" render={() => {
            return JSON.parse(localStorage.getItem('user')) ? <CatBreeds/> : <Redirect to="/"/>
          }} />
          <Route path="/" component={Login}/>
        </Switch>
    </div>
  );
}

export default App;
