import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PcNewsBlock from './pc_block';
import PcImageBlock from './pc_image_block'
import PCProduct from './pc_product'
const TabPane=Tabs.TabPane;
export default class PcNewsContainer extends React.Component{
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
        <Row >
           <Col span={2}></Col>
           <Col span={20} class="container">
                <div class="leftContainer">
                    <div class="carousel">
                        <Carousel {...settings}>
                           <div><img src="./src/images/carousel_1.png"/></div>
                           <div><img src="./src/images/carousel_2.jpeg"/></div>
                           <div><img src="./src/images/carousel_3.jpeg"/></div>
                        </Carousel>
                    </div>
                    <PcImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="102px"/>
                </div>
                <Tabs class="tab_news">
                  <TabPane tab="头条新闻" key="1">
                    <PcNewsBlock count={20} type="top" width="100%" bordered="false"/>
                  </TabPane>
                  <TabPane tab="国际新闻" key="2">
                    <PcNewsBlock count={20} type="guoji" width="100%" bordered="false"/>
                  </TabPane>
                  <TabPane tab="国内新闻" key="3">
                    <PcNewsBlock count={20} type="guonei" width="100%" bordered="false"/>
                  </TabPane>
                </Tabs>
                <Tabs class="tabs_product">
                  <TabPane tab="ReactNews 产品" key="1">
                    <PCProduct/>
                  </TabPane>
                </Tabs>
                <div>
                    <PcImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="125px"/>
                    <PcImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="125px"/>
                </div>
           </Col>
           <Col span={2}></Col>
        </Row>
       </div>
     )
  }
}
