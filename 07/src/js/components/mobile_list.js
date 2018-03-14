import React from 'react';
import {Row,Col} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router'
import Tloader from 'react-touch-loader'
export default class MobileList extends React.Component{
  constructor(){
    super();
    this.state={
      new:'',
      count:5,
      hasMore: 0,
      initializing:1,
      refresheAt: Date.now()
    };
  }
  componentWillMount(){
    console.log("count="+this.props.count);
    console.log("type="+this.props.type);
    var opts = {
        method:"GET"
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,opts)
    .then((response) => response.json()) //把response转为json
    .then((responseData) => { // 上面的转好的json
        this.setState({new:responseData})
        //alert(responseData);
        console.log(responseData);
      })
      .catch((error)=> {
          message.success('错误了');
        })
        console.log("1111");
  }
  loadMore(resolve){
    setTimeout(()=>{
      var count=this.state.count;
      this.setState({
        count:count+5,
      });
      var opts = {
          method:"GET"
      }
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.state.count,opts)
      .then((response) => response.json()) //把response转为json
      .then((responseData) => { // 上面的转好的json
          this.setState({new:responseData})
          //alert(responseData);
          console.log(responseData);
        })
        .catch((error)=> {
            message.success('错误了');
          })
          console.log("1111");
          this.setState({
            hasMore:count>0 && count<50
          });
          console.log("hasMore="+this.state.hasMore);
          //加载完成
          resolve();
    },2e3)
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        hasMore:1,
        //组件初始化完成
        initializing:2
      })
    },2e3);
  };
  render(){
  var {hasMore,initializing,refresheAt}=this.state;
  var count2 =this.state.new.length;
//  var count=news.length;
  console.log(count2);
  const newsList =count2
    ? this.state.new.map((newsItem, index) => (
        <section key={index} className="m_article list-item special_section clearfix ">
            <Link to={`details/${newsItem.uniquekey}`}>
                <div class="m_article_img">
                  <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                </div>
                <div className="m_article_info">
                    <div className="m_article_title">
                        <span>{newsItem.title}</span>
                    </div>
                    <div className="m_article_desc cle">
                          <div className="m_article_desc_l">
                              <span className="m_article_channel">{newsItem.realtype}</span>
                              <span className="m_article_time">{newsItem.date}</span>
                          </div>
                    </div>
                </div>
            </Link>
        </section>
    ))
    : '没有加载到任何新闻';

    return(

      <div>
          <Row>
            <Col span={24}>
            <Tloader class="tloader main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
              {newsList}
            </Tloader>
            </Col>

          </Row>
      </div>
    )
  }
}
