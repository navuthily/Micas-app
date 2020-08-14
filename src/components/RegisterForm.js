

import React , { useState }  from 'react';
import 'antd/dist/antd.css';
import axios from "axios";
import { Redirect } from 'react-router';
const baseURL ='http://localhost:4000/';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const RegisterForm = () => {
  const [redi, setRedi] = useState(false);

    const onFinish = values => {
     
    const { email, fullname, password } = values;
   axios({
      method: "post",
      url: "register",
      baseURL: baseURL,
      data: {
        email,
        fullname,
        password,
      },
    })
    .then(() => setRedi(true))
    .catch(function (erreur) {
      console.log(erreur);
    });
  };
  if (redi) {
    return <Redirect to='/login'/>;
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
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Fullname" />
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
        <Button type="primary" htmlType="submit" className="register-form-button">
          Register
        </Button>

      </Form.Item>
    </Form>
  );
};
export default RegisterForm;