import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  height: 64px;
  background: var(--mainWhite);
  box-shadow: 0 1px 5px var(--lightColor);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  @media only screen and (max-width: 768px) {
    & {
      padding: 0 1rem;
    }
  }
`;

const LogoContainer = styled.div`
  flex: 2;
  height: 64px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1023px) {
    & {
      justify-content: flex-start;
    }
  }
`;

const Hamburger = styled.div`
  font-size: 2rem;
  margin-right: 2rem;
  border: none;
  background: none;
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 1023px) {
    & {
      display: flex;
    }
  }
`;

const Logo = styled.img`
  width: 15.67rem;
  margin-right: 2rem;
`;

const LinksContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  .moreButton {
    font-size: 1.3rem !important;
    position: relative;

    div {
      align-items: center;
      display: flex;
    }
    span {
      margin-right: 0.1rem;
      font-size: 1rem !important;
    }

    .links {
      position: absolute;
      top: 130%;
      width: 15rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: var(--mainWhite);
      padding: 10px;
      border-radius: 0.3rem;
      box-shadow: 0 0.1rem 0.4rem var(--darkColor);
      display: none;
      .link {
        padding: 0.8rem 0;
        color: var(--linkColor);

        &:first-child,
        &:nth-child(2) {
          display: none;
        }

        @media only screen and (max-width: 1323px) {
          &:first-child,
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4),
          &:nth-child(5) {
            display: flex !important;
          }
        }
      }
    }

    &.active {
      .links {
        display: flex;
      }
    }
  }

  .link,
  .moreButton {
    text-decoration: none;
    color: var(--linkColor);
    margin-right: 1.5rem;
    margin-bottom: 0.1rem;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      color: var(--darkColor);
    }

    @media only screen and (max-width: 1323px) {
      &:nth-child(3),
      &:nth-child(4) {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    & {
      display: none;
    }
  }
`;

const ButtonContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;

  button {
    border: none;
    background: none;
    margin-right: 1rem;
    color: var(--borderColorLight);
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.8rem;
    border-radius: 0.3rem;

    &:last-child {
      color: var(--mainWhite);
      background: var(--borderColorLight);

      &:hover {
        color: var(--mainWhite);
        background: var(--borderColor);
      }
    }
    &:hover {
      color: var(--borderColor);
    }
  }
  @media only screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export {
  Container,
  Contents,
  LogoContainer,
  Hamburger,
  Logo,
  LinksContainer,
  ButtonContainer,
};
