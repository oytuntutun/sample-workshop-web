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
      purepdf.setFontSize(12).text(`${company ? 'is currently working in ' + company.slice(0, 1).toUpperCase() + company.slice(1) : ''}`, 10, 15)
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

        let descriptionSplit = description.split(' ')

        purepdf.setFontSize(12).text(`${currentlyWorking ? 'Working' : 'Worked'} as a ${title} at ${company.slice(0, 1).toUpperCase() + company.slice(1)} (${startedAt} - ${currentlyWorking ? 'still working' : endedAt })`, 10, 20 + (i+1) * 30)
        purepdf.setFontSize(10).text(`${location}`, 10, ((i+1) * 30) + 25)
        purepdf.setFontSize(10).text(`${descriptionSplit.slice(0, 16).join(' ')}`, 10, ((i+1) * 30) + 30)
        purepdf.setFontSize(10).text(`${descriptionSplit.slice(16, 32).join(' ')}`, 10, ((i+1) * 30) + 35)
        purepdf.setFontSize(10).text(`${descriptionSplit.slice(32, 48).join(' ')}`, 10, ((i+1) * 30) + 40)
        purepdf.setFontSize(10).text(`${descriptionSplit.slice(48, 64).join(' ')}`, 10, ((i+1) * 30) + 45)
      })

      education.length &&
      purepdf.setFontSize(14).text('Educations', 10, experience.length * 30 + 55)

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

        purepdf.setFontSize(12).text(`${currentlyStudying ? 'Studying' : 'Studied'} at ${school.slice(0,1).toUpperCase() + school.slice(1)} (${startedAt} - ${currentlyStudying ? 'still studying' : endedAt })`, 10, experience.length * 30 + (i+1) * 30 + 30)
        purepdf.setFontSize(10).text(`${location}`, 10, experience.length * 30 + (i+1) * 30 + 35)
        purepdf.setFontSize(10).text(`Division: ${division}`, 10, experience.length * 30 + (i+1) * 30 + 40)
        purepdf.setFontSize(10).text(`Degree: ${degree}`, 10, experience.length * 30 + (i+1) * 30 + 45)
        purepdf.setFontSize(10).text(`${description}`, 10, experience.length * 30 + (i+1) * 30 + 50)
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
