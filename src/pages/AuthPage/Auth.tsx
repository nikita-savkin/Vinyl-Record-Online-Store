import { FC } from 'react';
import SignInForm from '@widgets/SignInForm/SignInForm';
import SignUpForm from '@widgets/SignUpForm/SignUpForm';
import { AuthPageWrapper } from '@pages/AuthPage/AuthPage.styles';

const Auth: FC = () => {
  return (
    <AuthPageWrapper>
      <SignInForm />
      <SignUpForm />
    </AuthPageWrapper>
  );
};

export default Auth;
