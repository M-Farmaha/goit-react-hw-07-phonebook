import { BlurOverlay } from '../components/BlurOverlay';

import { LinkStyled, Section } from '../components/styled';
import { RegisterForm } from 'components/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <BlurOverlay />
      <Section>
        <RegisterForm />
        <LinkStyled to="/login">Already have an account? Sign in</LinkStyled>
      </Section>
    </>
  );
};

export default RegisterPage;
