import React from 'react';
import {Row,Col} from 'antd';
import {Card} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router'
export default class PcImageBlock extends React.Component{
  constructor(){
    super();
    this.state={
      new:'',
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
  }
  render(){
  const styleImage={
    display:"block",
    width:this.props.imageWidth,
    height:"90px"
  };
  const styleH3={
    width:this.props.imageWidth,
    whiteSpace:"nowrap",
    overflow:"hidden",
    textOverflow:"ellipsis"
  };
  const styleP={
    overflow:"hidden",
    width:this.props.imageWidth,
    textOverflow:"ellipsis"
  }
    /*
      '没有加载到任何新闻';*/
  var count =this.state.new.length;
//  var count=news.length;
  console.log(count);
  const newsList =count
    ? this.state.new.map((newsItem, index) => (
        <div key={index} class="imageblock">
            <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                <div class="custom-image">
                    <img alt=""  style={styleImage} src={newsItem.thumbnail_pic_s} />
                </div>
                <div class="custom-card">
                  <h3 style={styleH3}>{newsItem.title}</h3>
                  <p style={styleP}>{newsItem.author_name}</p>
                </div>
            </Link>
        </div>
    ))
    : '没有加载到任何新闻';

    return(
      <div class="topNewsList">
        <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
              {newsList}
        </Card>
      </div>
    )
  }
}
