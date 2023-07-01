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

export const Form = styled.form`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  display: flex;
  align-items: center;

  input {
    border: none;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    outline: none;
    padding: 8px 12px;
    border-radius: 5px;
    color: #fff;
  }

  input[type='text'] {
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    height: 18px;
    padding: 5px 12px;
    border-radius: 5px;
    color: #fff;
  }

  input[type='submit'] {
    background: rgb(255, 255, 255);
    outline: none;
    padding: 5px 12px;
    border-radius: 5px;
    color: #000;
    margin-left: 8px;
    cursor: pointer;
  }

  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    /* WebKit browsers */
    color: transparent;
  }

  input:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: transparent;
  }

  input:focus::-moz-placeholder,
  textarea:focus::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: transparent;
  }

  input:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: transparent;
  }
`;
