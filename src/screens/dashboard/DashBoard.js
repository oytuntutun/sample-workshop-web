import React from 'react'

import { connect } from 'react-redux'
import { logout, removeError } from '../../store/actions/user/user'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import { Header } from './components'
import { Experiences, Educations }  from './components'
import MaterialIcon from 'material-icons-react'

import '../../styles/dashboard.css'

class DashBoard extends React.Component {
  print = () => {
    const {
      company,
      name,
      surname,
      education,
      experience
    } = this.props.state

  	const filename  = `${name ? name : 'template'}${surname ? surname : ''}.pdf`
      let purepdf = new jsPDF({fontSize: 14})

      purepdf.setFontSize(16).text(`${name ? name : ''} ${surname ? surname : ''} resumé`, 10, 10)
      purepdf.setFontSize(12).text(`${company ? 'is currently working in ' + company : ''}`, 10, 15)
      purepdf.setFontSize(14).text('Experiences', 10, 45)

      experience.forEach((experience, i) => {
        const {
          currentlyWorking,
          startedAt,
          endedAt,
          location,
          description,
          title,
          company
        } = experience

        purepdf.setFontSize(12).text(`${currentlyWorking ? 'working' : 'worked'} as a ${title} at ${company} (${startedAt} - ${currentlyWorking ? 'still working' : endedAt })`, 10, 30 + (i+1) * 30)
        purepdf.setFontSize(10).text(`${location}`, 10, ((i+1) * 30) + 35)
        purepdf.setFontSize(10).text(`${description}`, 10, ((i+1) * 30) + 40)
      })

      education.length &&
      purepdf.setFontSize(14).text('Educations', 10, 155)

      education.forEach((education, i) => {
        const {
          currentlyStudying,
          startedAt,
          endedAt,
          location,
          school,
          degree,
          description,
          division
        } = education
        purepdf.setFontSize(12).text(`${currentlyStudying ? 'Studying' : 'studied'} at ${school} (${startedAt} - ${currentlyStudying ? 'still studying' : endedAt })`, 10, 140 + (i+1) * 30)
        purepdf.setFontSize(10).text(`${location}`, 10, 145 + (i+1) * 30)
        purepdf.setFontSize(10).text(`${division}`, 10, 150 + (i+1) * 30)
        purepdf.setFontSize(10).text(`${description}`, 10, 155 + (i+1) * 30)
        purepdf.setFontSize(10).text(`${degree}`, 10, 160 + (i+1) * 30)
      })

      purepdf.save(filename)
  }

  takeSS = () => {
    const {
      name,
      surname,
    } = this.props.state

    const filename  = `${name ? name : 'template'}${surname ? surname : ''}.pdf`

    html2canvas(document.querySelector('#exportThisNode'), {scale: 2}).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4')

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', -1, 0, 210, 210)
      pdf.save(filename)
    })
  }

  handleLogout = () => {
    const { logout } = this.props
    localStorage.clear()
    logout()
  }

  handleGlobalError = () => {
    const { error } = this.props.state
    const { removeError } = this.props

    if(error) {
      setTimeout(()=> {
        removeError()
      }, 8000)
    }

  return (
    error &&
      <div className='server-error-message' onClick={() => removeError()}>
        <span>
          sorry something went wrong <span role='img' aria-label='sad'>😞</span>
        </span>
        <MaterialIcon icon='close' size={30} />
      </div>
  )
}

  render () {
    const { loading } = this.props.state
    const { darkmode } = this.props.state

    if(loading) {
      return <div>loading</div>
    }

    return (
      <div className={`page-wrapper ${darkmode ? 'dark-area' : ''}`} id='exportThisNode'>
        <Header exportToPDF={this.print} takeSS={this.takeSS} />
        {this.handleGlobalError()}
        <div className='content-area'>
          <Experiences darkmode={darkmode} />
          <Educations darkmode={darkmode} />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { state: state.user }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: payload => {
      dispatch(logout())
    },
    removeError: () => {
      dispatch(removeError())
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)
