import React from 'react';
import ReactDOM from 'react-dom';
export default class ComponentBody extends React.Component{
//将要加载
componentWillMount(){
    console.log('将要加载..');
}
componentDidMount(){
  console.log('加载完成 ..');
}
  render(){
    var username="like";
    return(
      <div>
      <h1>i am a body!</h1>
      <p>{username==""?'未登录' : username}</p>
      </div>
    )
  }
}
