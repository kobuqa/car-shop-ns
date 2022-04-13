export const isPasswordConfimed = (
  password: string,
  confirmPassword: string
) => {
  return password !== confirmPassword ? false : true;
};
