import React, {Component} from 'react';

import { Form, Icon, Input, Button, Checkbox, Row } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem >
          <div style={{display:'flex', flexDirection: 'column'}}>
            
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>

            <a className="login-form-forgot" href="">Forgot password</a>

            <a href="">register now!</a>
          </div>
          

        </FormItem>

      </Form>
    );
  }
}

const LoginFormWraped = Form.create()(LoginForm);

export default LoginFormWraped;