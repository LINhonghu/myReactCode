import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
export default class ComponetHead extends React.Component{
  render(){
    const styleComponentHeader={
      header : {
        backgroundColor:"#333333",
        color:"#fff",
        paddingTop:"15px",
        paddingBottom:"15px"
      },
      header_h1:{
        color:"#fff",
      }
    }
    return(
      <footer style={styleComponentHeader.header}>
          <h1 style={styleComponentHeader.header_h1}>this is head!</h1>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/Detail/1234'>详细</Link></li>
            <li><Link to='/List'>列表</Link></li>
          </ul>
      </footer>
    )
  }
}
