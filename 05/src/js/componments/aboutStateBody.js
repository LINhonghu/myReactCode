import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild';
import ReactMixin from 'react-mixin';
import Mixinlog from './mixins';
export default class AboutStateBody extends React.Component{
     constructor(){
       super();//调用父类所有初始化方法
       this.state={username : "parry"}
     }
     changeUserInfo(){
       this.setState({username:"56789"});
       Mixinlog.log();

     }
     handleChildValueChange(event){
       this.setState({username:event.target.value});
     }
     //事件调用时需要用bind(this)将外界this传入函数内
     render(){
       //嵌套函数
    /*  setTimeout(()=>{
        this.setState({username : "LXP"});
      },4000)*/
       return(
         <div>
           <h1>state</h1>
          <p>{this.state.username} {this.props.userId}</p>
          <input type="text"/>
          <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
          <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
        
        </div>
       )
     }
}
ReactMixin(AboutStateBody.prototype,Mixinlog);
