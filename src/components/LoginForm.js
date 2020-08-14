
import React , { useState }  from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import axios from "axios";
import { Redirect } from 'react-router';
const baseURL ='http://localhost:4000/';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const [redirect, setRedirect] = useState(false);

    const onFinish = values => {
 
    const { email, password } = values;
   axios({
      method: "post",
      url: "login",
      baseURL: baseURL,
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        const {token, user } = response.data;
        console.log(response.data)
        console.log(token);
        axios.defaults.headers.common["x-access-token"] = token;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        setRedirect(true)
      })
      .catch((error) => {
        console.log("login error : " + error);
        console.log('loi gi the')
      });
  };
  console.log(redirect)
  if (redirect) {
  
    return <Redirect to='/'/>;
  }

  return (
    
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;