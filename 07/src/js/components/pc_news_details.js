import React from 'react';
import {Row,Col,BackTop} from 'antd';
import PCHeader from './pc_head'
import PCFooter from './pc_footer'
import PcImageBlock from './pc_image_block'
import CommonComments from './common_comment'
export default class PcNewsDetails extends React.Component{
  constructor(){
    super();
    this.state={
      newsItem:'',
    };
  }
  componentDidMount(){
    console.log("uniquekey="+this.props.params.uniquekey);
    var opts = {
        method:"GET"
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.params.uniquekey,opts)
    .then((response) => response.json()) //把response转为json
    .then((responseData) => { // 上面的转好的json
        this.setState({newsItem:responseData});
        document.title=this.state.newsItem.title+"-React News | React 新闻驱动平台";
        //alert(responseData);
        console.log(responseData);
      })
      .catch((error)=> {
          message.error('错误了');
        })
  }
  createMarkup(){
    //dangerouslySetInnerHTML 绑定原生的html
    return {__html:this.state.newsItem.pagecontent};
  }
  render(){
    return(
      <div>
        <PCHeader/>
        <Row>
            <Col span={2}></Col>
            <Col span={14} className="container">
                  <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    <hr/>
                    <CommonComments uniquekey={this.props.params.uniquekey}/>
                  </Col>
            <Col span={6} >
               <PcImageBlock count={40} type="top" width="100%" cartTitle="相关新闻" imageWidth="130px"/>
            </Col>
            <Col span={2}></Col>
        </Row>
        <PCFooter/>
        <BackTop/>
      </div>

    )
  }
}
