import React, { useState } from 'react';
import { ERROR_MESSAGES } from '../../utils/messages';
import { InputProps } from './Model';
import { StyledInput, StyledSubmitInput, Hint, Error } from './Styles';

export const Input: React.FC<InputProps> = (props) => {
  const { value, regEx, hintMessage, isValid, setIsValid } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const focusHandler = () => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const blurHandler = () => {
    setIsFocus(false);
    setIsBlur(true);

    if (value && regEx && setIsValid) {
      if (value.toString().match(regEx)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };

  return props.type !== 'submit' ? (
    <>
      <StyledInput {...props} onFocus={focusHandler} onBlur={blurHandler} />
      {isFocus && regEx && <Hint>{hintMessage}</Hint>}
      {isBlur && !isValid && regEx && (
        <Error>{ERROR_MESSAGES.VALIDATION}</Error>
      )}
    </>
  ) : (
    <StyledSubmitInput {...props} />
  );
};
