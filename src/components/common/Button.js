import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  margin: 2px 0
  border-radius: 3px;
  color: ${props => props.color ? props.color : 'blue'};
  border: 2px solid ${props => props.color ? props.color : 'blue'};
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${props => props.color ? props.color : 'blue'};
    color: white;
  }
`;

export default Button;
