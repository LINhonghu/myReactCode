import React from 'react';
import {Row,Col} from 'antd';
import {Card} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router'
export default class PcNewsBlock extends React.Component{
  constructor(){
    super();
    this.state={
      new:'',
    };
  }
  componentWillMount(){
    console.log("1111");
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
  render(){

    /*
      '没有加载到任何新闻';*/
  var count =this.state.new.length;
//  var count=news.length;
  console.log(count+"");
  const newsList =count
    ? this.state.new.map((newsItem, index) => (
      <li key={index}>
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
          {newsItem.title}
        </Link>
      </li>
    ))
    : '没有加载到任何新闻';

    return(
      <div class="topNewsList">
      <Card>
        <ul class="myul">
          {newsList}
        </ul>
      </Card>
      </div>
    )
  }
}
