 var React = require("react");
var ReactDOM = require("react-dom");
import ComponmentHeader from './componments/header';
import ComponentBody from './componments/body';
import AboutStateBody from './componments/aboutStateBody';
import ComponentFooter from './componments/footer'
export default class Index extends React.Component{
  render(){
    return(
      <div>
       <ComponmentHeader/>
       <ComponentBody/>
       <AboutStateBody userId={123456}/>
       <ComponentFooter/>
      </div>
    );
  }
}
ReactDOM.render(
   <Index/>,
    document.getElementById("box")
);
