import React from 'react'
import MaterialIcon from 'material-icons-react'

class Tips extends React.Component {
  render () {
    const { handleTemplate, closeTips, tips, darkmode, type } = this.props

    return(
      <div
        className={`${darkmode ? 'dark-tips-wrapper' : 'tips-wrapper'}`}
      >
        <MaterialIcon onClick={closeTips} icon='close' size={28} id='close-tips' />
        <h3>
          {type === 'titleSelect' &&
            'Choose a title'
          }
          {type === 'descSelect' &&
            'Choose max 3 descriptions'
          }
        </h3>
        {tips.map((tip) => {
          return (
            <span
              key={tip}
              id='tips'
              onClick={()=> handleTemplate(tip)}
            >
              {tip}
            </span>
          )
        })}
      </div>
    )

  }
}

export default Tips
