import React from 'react'

import '../styles/loader.css'

class Loader extends React.Component {
  render () {
    return(
      <div className="load-3">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    )
  }
}

export default Loader
