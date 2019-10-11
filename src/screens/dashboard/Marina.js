import React from 'react'

import { AccordionHeader } from '../../components'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';



class Marina extends React.Component {
  state = {
    accordionOpen: false
  }



  render () {
    const { details } = this.props
    const { accordionOpen } = this.state
    console.log(this.props.details)
    return (
      <div>
{/*
        <AccordionHeader
          onClick={()=> this.setState({accordionOpen: !accordionOpen})}
        >
          {details.marinaName}
        </AccordionHeader>

        {accordionOpen &&
          <div open={accordionOpen}>
              <p>{details.marinaCoords}</p>
          </div>
        }
*/}

        <Accordion atomic={true}>


          <AccordionItem title={details.marinaName}>
            <div style={{padding: '20px'}}>
              <p>{details.marinaPhone}</p>
              <p>{details.marinaCoords}</p>
            </div>
          </AccordionItem>

        </Accordion>


      </div>
    )
  }
}

export default Marina;
