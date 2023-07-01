import { useState, useEffect } from 'react';
import { NavWrapper, Logo, Login, Input } from './NavStyled';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [show, setShow] = useState('false');
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const Navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow('true');
    } else {
      setShow('false');
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    Navigate(`/search?q=${e.target.value}`);
  };

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          src='/images/logo.svg'
          alt='Disney Plus Logo'
          onClick={() => (window.location.href = '/')}
        />
      </Logo>

      {pathname === '/' ? (
        <Login>Log-in</Login>
      ) : (
        <Input
          value={searchValue}
          onChange={handleChange}
          className='nav_input'
          type='text'
          placeholder='Search'
        />
      )}
    </NavWrapper>
  );
};

export default Nav;
