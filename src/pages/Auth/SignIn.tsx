import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../../shared/Input/Input';
import { ROUTES } from '../../utils/routes';
import {
  Container,
  Title,
  Wrapper,
  Form,
  StyledNavLink,
  NavTitle,
} from './Styles';

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { signin, error, setError } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    error && toast.error(error);

    return () => {
      setError && setError('');
    };
  }, [error]);

  const onEmailChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setEmail((event.target as HTMLInputElement).value);
  };

  const onPasswordChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setPassword((event.target as HTMLInputElement).value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    signin && (await signin(email, password));
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <Wrapper>
      <Container>
        <Toaster position="top-right" />
        <Title>Sign in to Car Shop</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={onEmailChange}
            placeholder="Email"
            type="email"
            value={email}
            required
          />
          <Input
            onChange={onPasswordChange}
            placeholder="Password"
            type="password"
            value={password}
            required
          />
          <Input type="submit" />
        </Form>
        <NavTitle>
          Don’t have an account?{' '}
          <StyledNavLink to={ROUTES.SIGN_UP}>Create now.</StyledNavLink>
        </NavTitle>
      </Container>
    </Wrapper>
  );
};
