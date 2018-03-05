import React from 'react';
import ReactDOM from 'react-dom';
export default class ComponmentHeader extends React.Component {
    constructor(){
      super();
      this.state={
        miniHeader:false
      }
    }
    switchHeader(){
      this.setState({
        miniHeader: !this.state.miniHeader
      });
    }
    render() {
      //内联样式
      const styleComponentHeader = {
        header:{
          backgroundColor:"#333333",
          color:"#FFF",
          paddingTop:(this.state.miniHeader)?"3px":"15px",//注意不要用花括号
          //"padding-top":"15px",不推荐使用
          paddingBottom:"15px"
        }
      }
      return (
        <header style={styleComponentHeader.header} className="smallFontSize"
        onClick={this.switchHeader.bind(this)}>
          <h1> this is header </h1>
        </header>
       )
      }
    }
