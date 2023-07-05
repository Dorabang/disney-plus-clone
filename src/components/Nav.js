import { useState, useEffect } from 'react';
import {
  NavWrapper,
  Logo,
  Login,
  Form,
  SignOut,
  UserImg,
  DropDown,
} from './NavStyled';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const Nav = () => {
  const [show, setShow] = useState('false');
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const Navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const initialUserData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : {};
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === '/') {
          Navigate('/main');
        }
      } else {
        Navigate('/');
      }
    });
  }, [auth, Navigate, pathname]);

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

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        localStorage.setItem('userData', JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log('Error:', error.message);
      });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        localStorage.removeItme('userData');
        Navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate(`/search?q=${searchValue}`);
  };

  return (
    <>
      <NavWrapper show={show}>
        <Logo>
          <img
            src='/images/logo.svg'
            alt='Disney Plus Logo'
            onClick={() => (window.location.href = '/')}
          />
        </Logo>
        {pathname === '/' ? (
          <Login onClick={handleAuth}>Log-in</Login>
        ) : (
          <>
            <Form onSubmit={handleSubmit}>
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type='text'
                placeholder='Search'
              />
              <input type='submit' value='검색' />
            </Form>

            <SignOut>
              <UserImg src={userData.photoURL} alt={userData.displayName} />
              <DropDown>
                <span onClick={handleLogOut}>Sign Out</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </NavWrapper>
    </>
  );
};

export default Nav;
