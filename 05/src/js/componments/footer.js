import React from 'react';
import style from '../../css/footer.css'
export default class ComponentFooter extends React.Component{
  render(){
    console.log(style);
    return(
      <footer class={style.miniFooter}>
          <h1>this is footer!</h1>
      </footer>
    )
  }
}
