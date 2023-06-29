import { useState, useEffect } from 'react';
import { NavWrapper, Logo } from './NavStyled';

const Nav = () => {
  const [show, setShow] = useState('false');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow('true');
      } else {
        setShow('false');
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          src='/images/logo.svg'
          alt='Disney Plus Logo'
          onClick={() => (window.location.href = '/')}
        />
      </Logo>
    </NavWrapper>
  );
};

export default Nav;
