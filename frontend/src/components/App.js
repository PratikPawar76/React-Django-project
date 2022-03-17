import React, { Component } from "react";
import { render } from "react-dom";
import Home from './Home';
import RoomJoin from './RoomJoin';
import CreateRoom from './CreateRoom';
import { BrowserRouter , Routes, Route, Link, Redirect } from 'react-router-dom';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path= '/'element = { <Home /> } />
          <Route path = '/Create'element = { <CreateRoom /> } />
          <Route path = '/Join'element = { <RoomJoin /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}
const appDiv = document.getElementById("app");
render(<App/>, appDiv);
