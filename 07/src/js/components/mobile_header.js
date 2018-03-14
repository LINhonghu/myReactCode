import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
import {Link} from  'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem =Form.Item;
const TabPane = Tabs.TabPane;
 class  MobileHeader extends React.Component{
  constructor(){
    super();
    this.state={
       current: 'top',
       modalVisible:false,
       action:'login',
       hasLogined:true,
       userNickName:'李大刀',
       userid:0
    }
  }
  //点击选定状态方法
  handleClick(e){
    console.log('click ', e);
    if(e.key=="register"){
        this.setState({current:'register'});
        this.setModalVisible(true);
    }else{
      this.setState({
        current:e.key,
      })
    }
  };
  handleSubmit(e){
    //页面提交
    e.preventDefault();
    var formData="";
    this.props.form.validateFields((err,values) => {
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

      message.success("注册成功");
      //console.log("111");
      this.setModalVisible(false);
    });

  }
  //setModolVisible
  setModalVisible(value){

    this.setState({modalVisible:value});
  };
  //login
  login(){
        this.setModalVisible(true);
  }
  render(){
    const {getFieldDecorator} = this.props.form;
    const userShow = !this.state.hasLogined?

          <Icon type="inbox" />

      :
      <Icon type="setting" onClick={this.login.bind(this)}/>
    return(
      <div id="mymobile">
          <header>
            <img src="./src/images/logo.png" alt="logo"/>
            <Link to={'/'}>
            <span id="myspan">ReactNews</span>
            </Link>
            {userShow}
          </header>
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
                             <Input  prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"/>
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
                         <Button type="primary" htmlType="submit">登录</Button>
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
      </div>
    )
  }
}
export default MobileHeader=Form.create({})(MobileHeader);
