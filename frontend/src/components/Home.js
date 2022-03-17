import React, { Component } from 'react';
import { render } from "react-dom";
import RoomJoin from './RoomJoin';
import CreateRoom from './CreateRoom';
import { BrowserRouter , Routes, Route, Link, Redirect } from 'react-router-dom';
export default class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <h1>home</h1>
    );
    }
}
