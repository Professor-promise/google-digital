import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    text-decoration: none;
    margin-top: 1rem;
    background: none;
    outline: none;
    width: 10rem;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 0.125rem solid ${(props) => props.border};
    color: ${(props) => props.color};
    border-radius: 0.2rem;
    background: ${(props) => props.background};

    &:hover {
      color: var(--mainWhite);
      background: ${(props) => props.hoverBackground};
      border: 0.125rem solid ${(props) => props.hoverBorder};
    }
  }
`;

const Button = ({
  color,
  background,
  title,
  border,
  hoverBackground,
  hoverBorder,
}) => {
  return (
    <ButtonContainer
      color={color}
      background={background}
      border={border}
      hoverBackground={hoverBackground}
      hoverBorder={hoverBorder}
    >
      <Link to="/" className="button">
        {title}
      </Link>
    </ButtonContainer>
  );
};

export default Button;
