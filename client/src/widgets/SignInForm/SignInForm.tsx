import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { SignInFormWrapper } from '@widgets/SignInForm/SignInForm.styles';
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
      window.location.href = '/';
    } catch (e) {
      alert('Something went wrong, please try again');
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
        } else {
          console.error(error);
        }
      }
    }
  };

  return (
    <SignInFormWrapper>
      <h2>Sign In</h2>
      <Form
        name='normal_login'
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        labelCol={{ span: 8, offset: 1 }}
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
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
          <Button onClick={signInByGoogle}>Sign in with Google</Button>
        </Form.Item>
      </Form>
    </SignInFormWrapper>
  );
};

export default SignInForm;
