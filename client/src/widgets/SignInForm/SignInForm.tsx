import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { signInWithEmail, signInWithGooglePopup } from '@widgets/SignInForm/service/signin-service';

interface SignInForm {
  email: string;
  password: string;
}

const SignInForm = () => {
  const navigate = useNavigate();

  const signInByGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (e) {
      // TODO убрать все алерты
      alert("Can't sign in");
      console.error(e);
    }
  };

  const onSubmit = async (values: SignInForm) => {
    const { email, password } = values;

    try {
      await signInWithEmail(email, password);
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          alert('User not found');
        } else {
          alert("Can't sign in");
        }
      }
    }
  };

  return (
    <div className='login-form'>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        size='large'
      >
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input type='password' placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
          <Button onClick={signInByGoogle}>Sign in with Google</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInForm;
