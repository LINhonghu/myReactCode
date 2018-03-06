import React from 'react';
export default class ComponentDetails extends React.Component{
  render(){
    return(
      <div>
         <h2>这里是列表页面 id:{this.props.params.id}</h2>
      </div>
    )
  }
}
