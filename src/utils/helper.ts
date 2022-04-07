import { REG_EX } from './regEx';

export const isPasswordValid = (password: string) => {
  return REG_EX.PASSWORD.test(password);
};

export const isPasswordConfimed = (
  password: string,
  passwordConfirmation: string
) => {
  return password !== passwordConfirmation ? false : true;
};
