import React from 'react';

import styled from 'styled-components';


const AccordionBody = styled.div`
border: 1px solid gray;
border-top: none;
opacity: ${props => (props.open ? "1" : "0")};
overflow: hidden;
padding: ${props => (props.open ? "15px" : "0 15px")};
transition: all 2s;

p {
  margin: 0;
}
`

export default AccordionBody
