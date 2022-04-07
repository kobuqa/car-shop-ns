import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: #494949;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.009em;
`;

const Form = styled.form`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  color: #0070c9;
  text-decoration: none;
`;

const NavTitle = styled.h6`
  font-size: 14px;
  line-height: 1.42861;
  font-weight: 400;
  letter-spacing: -0.016em;
`;

export { Wrapper, Container, Title, Form, StyledNavLink, NavTitle };
