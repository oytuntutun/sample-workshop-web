import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDir ? props.flexDir : 'row'};
  transition: 0.5s all ease-out;
`;

export default Container
