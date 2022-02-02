import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .links {
    position: absolute;
    top: 0;
    left: 0;
    width: 24rem;
    flex-direction: column;
    align-items: flex-start;
    background: var(--mainWhite);
    padding: 10px;
    display: none;

    box-shadow: 0 0.1rem 0.4rem var(--darkColor);

    &.active.links {
      display: flex;
    }

    @media only screen and (max-width: 1023px) {
      & {
        left: -10%;
      }
    }

    @media only screen and (max-width: 768px) {
      & {
        left: -3%;
      }
    }

    .link {
      padding: 0.8rem 0;
      color: var(--linkColor);
      text-decoration: none;
      margin-bottom: 0.5rem;
      margin-left: 1rem;

      font-size: 1rem;
      font-weight: 600;
      height: 10vh;
      &:hover {
        color: var(--darkColor);
      }
    }
  }
`;
const LogoContainer = styled.div`
  height: 3.5rem;
  margin-left: -0.5rem;
  width: 24rem;
  border-bottom: 0.125rem solid var(--mainColor);
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 18rem;
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
  margin-left: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 0.3rem solid var(--mainColor);

  button {
    background: none;
    outline: none;
    border: none;
    margin-right: 1rem;
    color: var(--borderColorLight);
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.8rem;
    border-radius: 0.3rem;
    width: 100%;
    margin-left: 1rem;

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
`;

export { Container, ButtonContainer, Logo, LogoContainer };
