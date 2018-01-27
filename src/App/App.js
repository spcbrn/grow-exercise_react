import React, { Component } from 'react';
import axios from 'axios';
import { observable } from 'mobx';

import RepSearch from './components/RepSearch';

import './App.css';

//set up initial app state
const appState = observable({
  stateSelected: '',
  roleSelected: '',
  results: [],
  activeRep: null
})

//add necessary methods to mutate/update app state
appState.selectState = val => appState.stateSelected = val;
appState.selectRole = val => appState.roleSelected = val;
appState.dispatchRequest = (role, state) => {
  const requestMethods = {
    REP: state => axios.get(`/representatives/${state}`).then(resp => appState.results = resp.data.results),
    SEN: state => axios.get(`/senators/${state}`).then(resp => appState.results = resp.data.results)
  };
  appState.activeRep = null;
  return requestMethods[role](state);
}
appState.setActiveRep = name => appState.activeRep = appState.results.find(rep => rep.name === name);



class App extends Component {
  render() {
    return (
      <main className="App">
        <RepSearch store={appState}/>
      </main>
    )
  }
};

export default App;
