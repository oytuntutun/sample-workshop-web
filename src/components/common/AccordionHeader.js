import React from 'react';
import styled from 'styled-components';
const AccordionHeader = styled.div`
  cursor: pointer;
  margin: 5px 0;
  max-width: 600px;
  background: transparent;
  font-size: 16px;
  padding: 2px;
  border-radius: 3px;
  color: ${props => props.color ? props.color : 'blue'};
  border: 2px solid ${props => props.color ? props.color : 'blue'};
  &:hover {
    background-color: ${props => props.color ? props.color : 'blue'};
    color: white;
  }
`;

export default AccordionHeader;
