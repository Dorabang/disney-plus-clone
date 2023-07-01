import { styled } from 'styled-components';

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${(props) =>
    props.show === 'true' ? 'rgba(9, 11, 19, 0.6)' : 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  transition: all 400ms ease-in-out;
  backdrop-filter: ${(props) => props.show === 'true' && 'blur(10px)'};
`;

export const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

export const Login = styled.a`
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  letter-spacing: 1px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
    color: #000;
  }
`;

export const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  border: none;
`;
