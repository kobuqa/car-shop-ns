import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 5px 0;
  background: transparent;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  color: #494949;
  outline: none;
  padding: 10px;
  font-size: 17px;
  line-height: 1.29412;
  font-weight: 400;
  letter-spacing: -0.021em;
  transition: 0.5s;

  :focus {
    border: 2px solid #0070c9;
  }
`;

const StyledSubmitInput = styled(StyledInput)`
  color: #0070c9;
  border-color: #0070c9;
  cursor: pointer;

  :hover {
    background-color: #0070c9;
    border-color: #0070c9;
    color: #f5f5f5;
  }
`;

const Hint = styled.span`
  margin-left: 5px;
`;

const Error = styled.span`
  margin-left: 5px;
  color: #ff0000;
`;

export { StyledInput, StyledSubmitInput, Hint, Error };
