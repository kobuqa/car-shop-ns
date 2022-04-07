import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../../shared/Input/Input';
import { ROUTES } from '../../utils/routes';
import { AuthProps } from './Model';
import { isPasswordConfimed, isPasswordValid } from '../../utils/helper';
import {
  Container,
  Title,
  Wrapper,
  Form,
  StyledNavLink,
  NavTitle,
} from './Styles';
import { ERROR_MESSAGES } from '../../utils/messages';

export const Auth: React.FC<AuthProps> = ({ type }) => {
  const { signin, signup } = useAuth();
  const isUserRegistered: boolean = type === 'signin' ? true : false;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onEmailChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setEmail((event.target as HTMLInputElement).value);
  };

  const onPasswordChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setPassword((event.target as HTMLInputElement).value);
  };

  const onPasswordConfirmationChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setPasswordConfirmation((event.target as HTMLInputElement).value);
  };

  async function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isPasswordValid(password) || !isPasswordValid(passwordConfirmation)) {
      setError(ERROR_MESSAGES.PASSWORD_VALIDATION);
    }

    if (!isPasswordConfimed(password, passwordConfirmation)) {
      setError(ERROR_MESSAGES.PASSWORD_CONFIRMATION);
    }

    if (isUserRegistered) {
      await signin(email, password);
    } else {
      await signup(email, password);
    }
  }

  return (
    <Wrapper>
      <Container>
        {isUserRegistered ? (
          <Title>Sign in to Car Shop</Title>
        ) : (
          <Title>Sign up</Title>
        )}
        {error && <p>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
            type="email"
          />
          <Input
            onChange={onPasswordChange}
            placeholder="Password"
            type="password"
          />
          {!isUserRegistered && (
            <Input
              onChange={onPasswordConfirmationChange}
              placeholder="Confirm password"
              type="password"
            />
          )}
          <Input type="submit" />
        </Form>
        {isUserRegistered ? (
          <NavTitle>
            Don’t have an account?{' '}
            <StyledNavLink to={ROUTES.SIGN_UP}>Create now.</StyledNavLink>
          </NavTitle>
        ) : (
          <NavTitle>
            Already have an account?{' '}
            <StyledNavLink to={ROUTES.SIGN_IN}>Entry.</StyledNavLink>
          </NavTitle>
        )}
      </Container>
    </Wrapper>
  );
};
