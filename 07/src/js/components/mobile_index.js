import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import {Row,Col} from 'antd';
import MobileList from './mobile_list'
import { Menu, Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
import {Carousel} from 'antd';
const TabPane =Tabs.TabPane;
export default class MobileIndex extends React.Component{
  render(){
    const settings={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    return(
      <div>
         <MobileHeader/>
         <Row>
         <Col span={2}></Col>
          <Col span={24}>
         <Tabs>
            <TabPane tab="头条" key="1">
              <div class="carousel">
                  <Carousel {...settings}>
                     <div><img src="./src/images/carousel_1.png"/></div>
                     <div><img src="./src/images/carousel_2.jpeg"/></div>
                     <div><img src="./src/images/carousel_3.jpeg"/></div>
                  </Carousel>
              </div>
              <MobileList count={20} type="top"/>
            </TabPane>
            <TabPane tab="社会" key="2">
              <MobileList count={20} type="shehui"/>
            </TabPane>
            <TabPane tab="国内" key="3">
              <MobileList count={20} type="guonei"/>
            </TabPane>
            <TabPane tab="国际" key="4">
              <MobileList count={20} type="guoji"/>
            </TabPane>
            <TabPane tab="娱乐" key="5">
              <MobileList count={20} type="yule"/>
            </TabPane>
         </Tabs>
         </Col>
          <Col span={2}></Col>
       </Row>
         <MobileFooter/>
      </div>
    )
  }
}
