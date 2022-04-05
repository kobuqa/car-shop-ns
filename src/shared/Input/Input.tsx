import React from 'react';
import { InputProps } from './Model';
import { StyledInput, StyledSubmitInput } from './Styles';

export const Input: React.FC<InputProps> = (props) => {
  return props.type !== 'submit' ? (
    <StyledInput {...props} />
  ) : (
    <StyledSubmitInput {...props} />
  );
};
