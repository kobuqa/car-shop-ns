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
    border: 1px solid #0070c9;
    box-shadow: 0 0 0 1px #0070c9;
    color: #494949;
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

export { StyledInput, StyledSubmitInput };
