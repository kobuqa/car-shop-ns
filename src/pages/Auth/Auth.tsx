import React from 'react';
import { Input } from '../../shared/Input/Input';
import { routes } from '../../utils/routes';
import { AuthProps } from './Model';
import {
  Container,
  Title,
  Wrapper,
  Form,
  StyledNavLink,
  NavTitle,
} from './Styles';

export const Auth: React.FC<AuthProps> = ({ type }) => {
  const isUserRegistered: boolean = type === 'signin' ? true : false;

  return (
    <Wrapper>
      <Container>
        {isUserRegistered ? (
          <Title>Sign in to Car Shop</Title>
        ) : (
          <Title>Register now</Title>
        )}
        <Form>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          {!isUserRegistered && (
            <Input placeholder="Confirm password" type="password" />
          )}
          <Input type="submit" />
        </Form>
        {isUserRegistered ? (
          <NavTitle>
            Don’t have an account?{' '}
            <StyledNavLink to={routes.SIGN_UP}>Create now.</StyledNavLink>
          </NavTitle>
        ) : (
          <NavTitle>
            Already have an account?{' '}
            <StyledNavLink to={routes.SIGN_IN}>Entry.</StyledNavLink>
          </NavTitle>
        )}
      </Container>
    </Wrapper>
  );
};
