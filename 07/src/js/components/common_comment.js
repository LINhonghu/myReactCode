import React from 'react';
import { Row, Col } from 'antd';
import {Card} from 'antd';
import { Menu, Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
import {Router,Route,hashHistory} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem =Form.Item;
const TabPane = Tabs.TabPane;
 class CommonComments extends React.Component{
  constructor(){
    super();
    this.state={
      comments:''
    }
  };
  componentDidMount(){
    console.log(" 评论 uniquekey="+this.props.uniquekey);
    console.log("url=http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey+"+this.props.uniquekey);
    var opts = {
        method:"GET"
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey,opts)
    .then((response) => response.json()) //把response转为json
    .then((responseData) => { // 上面的转好的json
        this.setState({comments:responseData})
        //alert(responseData);

      })
      .catch((error)=> {
          message.error('错误了'+error);
          console.log(error);
        })
        message.success("加载完成！")
  }
  handleSubmit(e){
    e.preventDefault();
    var formData="";
    var opts = {
        method:"GET"
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        formData=values;
        console.log('Received values of form: ', formData.remark);
      }
    });
    console.log("评论url=http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=1&uniquekey="+this.props.uniquekey+"&commnet="+formData.remark);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=1&uniquekey="+this.props.uniquekey+"&commnet="+formData.remark,opts)
    .then((response) => response.json()) //把response转为json
    .then((responseData) => { // 上面的转好的json
         this.componentDidMount();
      })
      .catch((error)=> {
          message.error('评论错误了'+error);
        })
       message.success("第一次加载完成！")
       console.log('加载完成');
  }
  render(){
      const {getFieldDecorator} = this.props.form;
      const commentList =this.state.comments.length
  			?  this.state.comments.map((comment, index) => (
  				<Card key={index} title={comment.UserName} extra={< a href = "#" > 发布于 {comment.datetime} < /a>}>
  					<p>{comment.Comments}</p>
  				</Card>
  			))
  			: '没有加载到任何评论';
      return(
        <div class="comment">
          <Row>
             <Col span={24}>
                 {commentList}
                <Form onSubmit={this.handleSubmit.bind(this)}>
                   <FormItem label="你的评论">
                   {getFieldDecorator('remark')
                     (<Input type="textarea" placeholder="随便写" />)
                    }
                   </FormItem>
                   <Button type="primary" htmlType="submit">提交评论</Button>
                </Form>
             </Col>
          </Row>
        </div>
      )
  }
}
export default CommonComments=Form.create()(CommonComments);
