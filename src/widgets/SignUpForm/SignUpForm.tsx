import { Button, Form, Input } from 'antd';
import { createAuthUserWithEmailAndPassword, createUserDoc } from '@widgets/SignUpForm/service/signup-service';

interface SignUpForm {
  email: string;
  password: string;
  userName: string;
}

const SignUpForm = () => {
  const onRegister = async (values: SignUpForm) => {
    const { email, password, userName } = values;
    const additionalInfo = { userName: userName };

    try {
      const createdUser = await createAuthUserWithEmailAndPassword(email, password);
      if (createdUser) await createUserDoc(createdUser.user, additionalInfo);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          // TODO убрать все алерты
          alert('Email already in use');
        } else {
          alert('Account is not created');
        }
      }
    }
  };

  return (
    <div className='signup-form'>
      <Form name='register' onFinish={onRegister} scrollToFirstError>
        <Form.Item
          name='userName'
          label='Nickname'
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: false }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='email'
          label='E-mail'
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
          <Input />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 6,
              message: 'Password should be at least 6 characters',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='confirm'
          label='Confirm Password'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
