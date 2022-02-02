import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 19rem;
  padding: 0 11rem;
  position: absolute;
  top: 4rem;
  left: 0;
  display: flex;
  align-items: center;

  justify-content: center;
  width: 100%;
  background: var(--mainColor);

  @media only screen and (max-width: 1023px) {
    & {
      padding: 0 5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    & {
      p {
        font-size: 0.8rem;
      }
    }
  }

  .box {
    display: flex;
    align-items: flex-start;
    height: 10rem;

    .img {
      flex: 40%;
      width: 40px;
      margin-right: 8%;

      img {
        width: 100%;
      }
    }
    .content {
      display: block;
      flex: 60%;
      font-size: 1.1rem;
      font-weight: 320;
    }
    @media only screen and (max-width: 1023px) {
      & {
        flex-direction: column;

        .img {
          width: 60%;
        }
      }
    }
  }
`;

const Section = styled.div`
  padding: 0 11rem;
  /* height: 26.5rem; */
  padding-top: 3rem;
  position: relative;
  top: 22rem;
  left: 0;

  @media only screen and (max-width: 1023px) {
    & {
      padding: 2rem 5rem;
    }
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      flex: 60%;
      margin-right: 4rem;

      h3 {
        font-size: 4rem;
        font-weight: 400;
        color: var(--darkColor);
        line-height: 4rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.2rem;
        width: 90%;
      }
    }

    .img {
      flex: 40%;
      width: 60px;

      img {
        width: 90%;
      }
    }
    @media only screen and (max-width: 1023px) {
      & {
        .content {
          margin-right: 2rem;
          h3 {
            font-size: 3rem;
            line-height: 3rem;
          }
          p {
            font-size: 1rem;
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
      & {
        flex-direction: column;
        .content {
          margin-right: 2rem;
          h3 {
            font-size: 3rem;
            line-height: 3rem;
          }
          p {
            font-size: 1rem;
          }
        }
        .img {
          width: 100%;
          margin-top: 2rem;
          display: flex;
          justify-content: center;

          img {
            width: 70%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

const Content = styled.div`
  background: var(--mainColor);
  width: 100%;
  padding: 0 11rem;
  height: 9.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  top: 22rem;
  left: 0;

  .imageContainer {
    display: flex;
    align-items: baseline;
    justify-content: baseline;
    .image {
      width: 4rem;
      margin-right: 1rem;
      height: 4rem;
      object-fit: contain;

      img {
        width: 80%;
      }
    }
    @media only screen and (max-width: 1023px) {
      & {
        img {
          width: 60%;
        }
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    & {
      .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const SectionTwo = styled.div`
  background: var(--borderColorLight);
  width: 100%;
  padding: 0 8rem;
  height: 11.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 22rem;
  left: 0;
  gap: 2rem;
  .iconContainer {
    width: 4rem;
    height: 4rem;
    background: var(--mainWhite);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;

    .icon {
      font-size: 3.2rem;
      color: var(--borderColorLight);
    }
  }
  .content {
    flex: 8;
    color: var(--mainWhite);

    h1 {
      font-weight: 400;
      font-size: 2.2rem;
    }
    p {
      font-weight: 300;
      font-size: 1.1rem;
      margin-right: 3rem;
    }
  }
  .button {
    flex: 3;
    width: 100%;
    display: flex;
    place-content: center;
    color: var(--mainWhite);

    span {
      font-weight: 500;
      font-size: 1.2rem;
    }

    .btn {
      color: var(--mainWhite);
      font-size: 1.6rem;
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 1150px) {
    & {
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;

      .iconContainer {
        margin-top: 1.5rem;
      }
      .content {
        margin-top: 1rem;
      }
      .button {
        margin-top: -1rem;
      }
    }
  }

  @media only screen and (max-width: 841px) {
    & {
      flex-wrap: nowrap;
      flex-direction: column;
      padding-top: 0.5rem;
      text-align: center;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      .iconContainer {
        margin-top: -0.1rem;
        width: 3rem;
        height: 3rem;
      }
      .content {
        margin-bottom: 1rem;
        margin-top: -1.3rem;
        h1 {
          font-size: 1.4rem;
        }
        p {
          width: 100%;
          font-size: 1rem;
        }
      }
      .button {
        margin-top: -2.5rem;
        span {
          font-weight: 500;
          font-size: 1rem;
        }

        .btn {
          color: var(--mainWhite);
          font-size: 1.6rem;
          text-decoration: none;
        }
      }
    }
  }

  @media only screen and (max-width: 730px) {
    & {
      .content {
        h1 {
          font-size: 1.1rem;
        }
        p {
          font-size: 0.7rem;
        }
      }
      .button {
        font-size: 1rem;
      }
    }
  }
`;

const SectionThree = styled.div`
  background: var(--mainWhite);
  width: 100%;
  padding: 2rem 11rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  top: 22rem;
  left: 0;

  .courses {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--linkColor);

    h2 {
      font-size: 2.2rem;
      font-weight: 400;
      line-height: 2;
    }
    p {
      font-size: 1.2rem;
      text-align: center;
      padding-bottom: 2rem;
    }
    .boxContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      .box {
        width: 19rem;
        height: 20rem;
        border-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: 0 0.1rem 0.2rem var(--linkColor);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        .img {
        }

        h3 {
          font-size: 1.2rem;
          margin: 1rem 0;
          font-weight: 500;
        }

        p {
          text-align: left;
          font-size: 1rem;
        }
        .icon {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          font-size: 1.5rem;
          color: var(--borderColorLight);
          cursor: pointer;
        }
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    @media only screen and (max-width: 1295px) {
      .boxContainer {
        .box {
          align-items: center;
          p {
            text-align: center;
          }
        }
      }
    }
    @media only screen and (max-width: 950px) {
      & {
        h2 {
          font-size: 2rem;
        }
        p {
          font-size: 1.1rem;
        }
      }
    }

    @media only screen and (max-width: 884px) {
      & {
        h2 {
          font-size: 1.5rem;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      & {
        h2 {
          font-size: 1.2rem;
          text-align: center;
          line-height: 1.3;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10rem;
    width: 60rem;

    h2 {
      font-weight: 500;
      margin: 5rem 0 4rem 0;
      font-size: 2.2rem;
      align-self: center;
    }
    .content {
      border-top: 0.1rem solid var(--linkColor);
      border-bottom: 0.1rem solid var(--linkColor);
      padding: 1.5rem 0;
      color: var(--darkColor);
      margin-bottom: -0.1rem;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 5s ease-in-out;
        h3 {
          font-weight: 500;
        }
        .icon {
          font-size: 2rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &.active {
            transform: rotate(180deg);
          }
        }
      }
      p {
        padding-top: 1rem;
        transition: all 2s ease-in-out;
      }
    }
    .button {
      align-self: center;
      margin: 2rem 0;
    }
    @media screen and (max-width: 868px) {
      & {
        width: 80rem;
      }
    }
  }
`;

const SectionFour = styled.div`
  background: var(--mainWhite);
  width: 100%;
  padding: 2rem 11rem;
  height: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 22rem;
  left: 0;
  border-bottom: 0.01rem solid var(--linkColor);

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;

    p {
      color: var(--linkColor);
    }
    select {
      padding: 0.2rem;
      font-size: 1rem;
    }
  }
`;

const Footer = styled.div`
  background: var(--mainWhite);
  width: 100%;
  padding: 2.5rem 11rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  top: 22rem;
  left: 0;
  gap: 2rem;
  font-size: 1.7rem;

  .title {
    font-size: 1rem;
    color: var(--linkColor);
  }
  .facebook {
    color: var(--facebook);
  }
  .twitter {
    color: var(--twitter);
  }
  .linkedin {
    color: var(--linkedin);
  }
`;

export {
  Container,
  Section,
  SectionTwo,
  SectionThree,
  SectionFour,
  Wrapper,
  Content,
  Footer,
};
