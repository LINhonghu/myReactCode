var React = require("react");
var ReactDOM = require("react-dom");
import  ComponetHead from './components/head';
import ComponetBody from './components/body';
import ComponetFooter from './components/footer';
import 'antd/dist/antd.css'
export default class Index extends React.Component{
 render(){
   return(
     <div>
        <ComponetHead/>
        <ComponetBody/>
        <div>
          {this.props.children}
        </div>
        <ComponetFooter/>
     </div>
   );
 }
}
