import React from 'react';
import { sidebarLinks } from '../data';
import { Link } from 'react-router-dom';
import {
  Container,
  ButtonContainer,
  Logo,
  LogoContainer,
} from './styles/Sidebar.style';

const Sidebar = ({ showLinks, setShowLinks }) => {
  return (
    <Container>
      <div className={showLinks ? 'links active' : 'links'}>
        <LogoContainer>
          <Link to="/" onClick={() => setShowLinks(!showLinks)}>
            <Logo src="assets/logo.png" />
          </Link>
        </LogoContainer>
        {sidebarLinks.map((link) => {
          const { id, name, path } = link;
          return (
            <Link
              to={path}
              key={id}
              className="link"
              onClick={() => setShowLinks(!showLinks)}
            >
              {name}
            </Link>
          );
        })}
        <ButtonContainer>
          <button>Sign in</button>
          <button>Register</button>
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default Sidebar;
