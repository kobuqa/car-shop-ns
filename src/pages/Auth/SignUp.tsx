import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../../shared/Input/Input';
import { isPasswordConfimed } from '../../utils/helper';
import { ERROR_MESSAGES, HINT_MESSAGES } from '../../utils/messages';
import { REG_EX } from '../../utils/regEx';
import { ROUTES } from '../../utils/routes';
import {
  Container,
  Title,
  Wrapper,
  Form,
  StyledNavLink,
  NavTitle,
} from './Styles';

export const SignUp: React.FC = () => {
  const { signup, error, setError } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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

  const onConfirmPasswordChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setConfirmPassword((event.target as HTMLInputElement).value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isPasswordConfimed(password, confirmPassword)) {
      toast.error(ERROR_MESSAGES.PASSWORD_CONFIRMATION);
    } else if (
      isPasswordConfimed(password, confirmPassword) &&
      isEmailValid &&
      isPasswordValid
    ) {
      await signup(email, password);
    } else {
      toast.error(ERROR_MESSAGES.DEFAULT);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Toaster position="top-right" />
        <Title>Sign up</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={onEmailChange}
            placeholder="Email"
            type="email"
            value={email}
            hintMessage={HINT_MESSAGES.EMAIL_VALIDATION}
            regEx={REG_EX.EMAIL}
            isValid={isEmailValid}
            setIsValid={setIsEmailValid}
            required
          />
          <Input
            onChange={onPasswordChange}
            placeholder="Password"
            type="password"
            value={password}
            hintMessage={HINT_MESSAGES.PASSWORD_VALIDATION}
            regEx={REG_EX.PASSWORD}
            isValid={isPasswordValid}
            setIsValid={setIsPasswordValid}
            required
          />
          <Input
            onChange={onConfirmPasswordChange}
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            required
          />
          <Input type="submit" />
        </Form>
        <NavTitle>
          Already have an account?{' '}
          <StyledNavLink to={ROUTES.SIGN_IN}>Entry.</StyledNavLink>
        </NavTitle>
      </Container>
    </Wrapper>
  );
};
