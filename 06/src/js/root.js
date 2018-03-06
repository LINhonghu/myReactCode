import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentDetails from './components/details'
import ComponentList from './components/list'
import {Router,Route,hashHistory} from 'react-router';
export default class Root extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route component={Index} path="/">
          <Route component={ComponentList} path="List"></Route>
        </Route>
        <Route component={ComponentDetails} path="Detail/:id"></Route>
      </Router>
    )
  }
}
ReactDOM.render(
  <Root/>
  ,
   document.getElementById("box")
);
