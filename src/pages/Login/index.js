import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'
import { fechLogin } from '@/store/modules/user'
import {  useDispatch } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch()
  //这里比较不同的一点就是在form组件里写逻辑而不是在button里写
  const onFinish = values =>{
    console.log(values)
    dispatch(fechLogin(values))

  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish}validateTrigger="onBlur">
          <Form.Item
          name="mobile"
          rules={[
            { required: true, message: '请输入手机号' },
            //第一条通过再校验第二条
            {
              pattern: /^1[3-9]\d{9}$/,
              message: '手机号码格式不对'
            }
          ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
          name="code"
          
          rules={[
            { required: true, message: '请输入验证码' },
          ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login