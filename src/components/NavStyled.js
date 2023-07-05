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

  @media (max-width: 768px) {
    position: static;
    transform: translateX(0);
  }

  input {
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 8px 12px;
    border-radius: 5px;
    color: #fff;
  }

  input[type='text'] {
    background: rgba(255, 255, 255, 0.05);
    outline: none;
    height: 18px;
    padding: 5px 12px;
    border-radius: 5px;
    color: #fff;
  }

  input[type='submit'] {
    background: rgba(255, 255, 255, 0.05);
    outline: none;
    padding: 5px 12px;
    border-radius: 5px;
    color: #999;
    margin-left: 8px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    @media (max-width: 768px) {
      display: none;
    }
  }

  input[type='submit']:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
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

export const DropDown = styled.div`
  position: absolute;
  top: 64px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 5px;
  box-shadow: 0px 0px 18px 0px rgb(0 0 0 /50%);
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  transition: all 0.2s ease 0s;
  width: 100px;
  opacity: 0;

  &:hover {
    background: #f9f9f9;
    color: #000;
  }

  @media (max-width: 768px) {
    top: 40px;
    right: 0px;
  }
`;

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    height: 28px;
    width: 28px;
  }
`;

export const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
