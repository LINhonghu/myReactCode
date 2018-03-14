import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
import {Link} from  'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem =Form.Item;
const TabPane = Tabs.TabPane;
 class PCHeader extends React.Component{
  //设置一个选定状态
  constructor(){
    super();
    this.state={
       current: 'top',
       modalVisible:false,
       action:'login',
       hasLogined:false,
       userNickName:'李大刀',
       userid:0
    }
  }
  //点击选定状态方法是否登陆事件
  handleClick(e){
    console.log('click ', e);
    if(e.key=="register"){
        this.setState({current:'register'});
        this.setModalVisible(true);
    }else{
      console.log("item");
      console.log(e.item);
      this.setState({
        current:e.key,
      })

    }
  };
//页面提交事件
  handleSubmit(e){
    //页面提交
    e.preventDefault();
    var formData="";
    this.props.form.validateFields((err, values) => {
      if (!err) {
        formData=values;
        console.log('Received values of form: ', values);
      }
      //get请求
      /*网络请求的配置*/
        var opts = {
            method:"GET"
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username="+formData.note+"&r_password="+formData.note+"&r_confirmPassword="+formData.note,opts)
        .then((response) => response.json()) //把response转为json
        .then((responseData) => { // 上面的转好的json
            this.setState({userNickName:responseData})
            //alert(responseData);
            console.log(responseData);
          })
          .catch((error)=> {
              message.success('错误了');
            })
          if(this.state.action=="login"){
            this.setState({hasLogined:true})
          }
      message.success("注册成功");
      //console.log("111");
      this.setModalVisible(false);
    });

  }
  //setModolVisible模态框
  setModalVisible(value){
    this.setState({modalVisible:value});
  };
  callback(key){
    if(key==1){
      this.setState({action:'login'});
    }else{
      this.setState({action:'register'});
    }
  };
  render(){
    //用于接受页面参数
    const {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key="logoout" class="myresgiset">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>

        <Link target="_blank">
          <Button type="dashed" htmlType="button" >
              个人中心
          </Button>
        </Link>
       <Button type="ghost" htmlType="button">退出</Button>
    </Menu.Item>
    :
    <Menu.Item key="register" class="myresgiset">
      <Icon type="appstore"/>注册/登录
    </Menu.Item>
    return(
      <header>

        <Row>
          <Col span={2}></Col>
          <Col span={4}>
              <a href="/" class="logo">
                <img src="./src/images/logo.png" alt="logo"/>
                <span>ReactNews</span>
              </a>
          </Col>
          <Col span={16}>
            <Menu
            mode="horizontal"
            selectedKeys={[this.state.current]}
             onClick={this.handleClick.bind(this)}
            >

                <Menu.Item key="top">

                    <Link to={'/'}>
                          <Icon type="appstore"/>头条
                    </Link>

                </Menu.Item >

                <Menu.Item key="tiyu">
                        <Icon type="appstore"/>体育
                </Menu.Item>
                <Menu.Item key="guonei">
                  <Icon type="appstore"/>国内
                </Menu.Item>
                <Menu.Item key="guoji">
                  <Icon type="appstore"/>国际
                </Menu.Item>
                <Menu.Item key="shishang">
                  <Icon type="appstore"/>时尚
                </Menu.Item>
                <Menu.Item key="keji">
                  <Icon type="appstore"/>科技
                </Menu.Item>
              {userShow}
            </Menu>
<Modal title="用户中心"
       warpClassName="vertical-center-modal"
       visible={this.state.modalVisible}
       warpClassName="vertical-center-modal"
       onCancel={()=>this.setModalVisible(false)}
       onOk={()=>this.setModalVisible(false)} okText="关闭"
       >
       <Tabs type="card" >


       <TabPane tab="登陆" key="1">
         <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
           <FormItem label="帐户" key="1">
           {getFieldDecorator('note', {
               rules: [{ required: true, message: 'Please input your note!' }],
               })(
               <Input />
               )}
           </FormItem>
           <FormItem label="密码" key="2">
           {
             getFieldDecorator('password', {
               rules: [{ required: true, message: 'Please input your Password!' }],
             })
             (<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />)
           }
           </FormItem>
           <Button type="primary" htmlType="submit">Login</Button>
         </Form>
       </TabPane>



          <TabPane tab="注册" key="2">
            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="帐户" key="1">
              {getFieldDecorator('note', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                  })(
                  <Input />
                  )}
              </FormItem>
              <FormItem label="密码" key="2">
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })
                (<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />)
              }
              </FormItem>
              <FormItem  label="确认密码" key="3">
              {getFieldDecorator('com_password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Com_password" />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">注册</Button>
            </Form>
          </TabPane>
       </Tabs>
</Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}

export default PCHeader=Form.create()(PCHeader);
