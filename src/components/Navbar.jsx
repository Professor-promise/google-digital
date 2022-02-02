import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu, MdOutlineExpandMore } from 'react-icons/md';
import { links, extendedLinks } from '../data';
import {
  Container,
  Contents,
  LogoContainer,
  Hamburger,
  Logo,
  LinksContainer,
  ButtonContainer,
} from './styles/Navbar.style';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <Container>
      <Contents>
        <LogoContainer>
          <Hamburger>
            <MdOutlineMenu onClick={() => setShowLinks(!showLinks)} />
            <Sidebar showLinks={showLinks} />
          </Hamburger>
          <Link to="/" className="logo">
            <Logo src="assets/logo.png" />
          </Link>
        </LogoContainer>
        <LinksContainer>
          {links.map((link) => {
            const { id, name, path } = link;
            return (
              <Link to={path} key={id} className="link">
                {name}
              </Link>
            );
          })}
          <div className={showLinks ? 'moreButton active' : 'moreButton'}>
            <div onClick={() => setShowLinks(!showLinks)}>
              <span>More</span>
              <MdOutlineExpandMore />
            </div>
            <div className="links">
              {extendedLinks.map((link) => {
                const { id, name, path } = link;
                return (
                  <Link to={path} key={id} className="link">
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        </LinksContainer>
        <ButtonContainer>
          <button>Sign in</button>
          <button>Register</button>
        </ButtonContainer>
      </Contents>
    </Container>
  );
};

export default Navbar;
