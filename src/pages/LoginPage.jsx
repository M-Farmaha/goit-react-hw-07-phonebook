import { BlurOverlay } from '../components/BlurOverlay';

import { LinkStyled, Section } from '../components/styled';
import { LoginForm } from 'components/LoginForm';

const LoginPage = () => {
  return (
    <>
      <BlurOverlay />
      <Section>
        <LoginForm />
        <LinkStyled to="/register">Don't have an account? Sign Up</LinkStyled>
      </Section>
    </>
  );
};

export default LoginPage;
