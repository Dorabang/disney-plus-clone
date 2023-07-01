import { useState, useEffect } from 'react';
import { NavWrapper, Logo, Login, Form } from './NavStyled';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate(`/search?q=${searchValue}`);
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
        <Form onSubmit={handleSubmit}>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type='text'
            placeholder='Search'
          />
          <input type='submit' value='검색' />
        </Form>
      )}
    </NavWrapper>
  );
};

export default Nav;
