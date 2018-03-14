import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'
import PcNewsDetails from './components/pc_news_details'
import MobileNewsDetails from './components/mobile_news_detailes'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component{
  componentWillMount(){
      document.title="-React News | React 新闻驱动平台";
  }
  render(){
    return(
        <div>
           <MediaQuery query='(min-device-width:1224px)'>
           <Router history={hashHistory}>
               <Route path="/" component={PCIndex}></Route>
               <Route path="details/:uniquekey" component={PcNewsDetails}></Route>
           </Router>
           </MediaQuery>
           <MediaQuery query='(max-device-width:1224px)'>
              <Router history={hashHistory}>
                  <Route path="/" component={MobileIndex}></Route>
                  <Route path="details/:uniquekey" component={MobileNewsDetails}></Route>
              </Router>
           </MediaQuery>
        </div>
    )
  }
}
ReactDOM.render(
  <Root/>
  ,
   document.getElementById("mainContainer")
);
