import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

export default class ComponentBody extends React.Component{
  render(){
    return(
      <footer>
          <h1>this is body!</h1>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
      </footer>
    )
  }
}
