import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
  workExperienceDetailsContainer: {
    background: 'white',
    borderRadius: '10px',
    minHeight: '200px',
    boxShadow: '0 0.7em 18px #EAEEF8',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5em 0',
    border: '3px solid #F8F8F8',
    paddingBottom: '0.5em',
    '& div:not(:first-child)': {
      paddingLeft: '0.7em'
    }
  },
  workExperienceRole: {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    background: 'linear-gradient(to right, #86A8E7 0%, #8989CB 100%)',
    color: 'white',
    fontFamily: 'Lato script=all',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '1.1em',
    margin: '0',
    padding: '0.37em 0.7em'
  },
  companyName: {
    fontFamily: 'Lato script=all rev=2',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '1.125em',
    color: '#757892',
    margin: '0.5em 0 0.35em 0.35em'
  },
  workPeriod: {
    extend: 'companyName',
    fontSize: '0.875em',
    margin: '0.25em 0 0.35em 0.75em'
  },
  workDescription: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    margin: '0.25em 0.75em 0.35em 0.75em',
    lineHeight: '1.6'
  },
  title:{
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    margin: '0.5em 0.75em 0.25em 0.75em'
  },
  responsabilitiesList: {
    paddingLeft: '2.5em',
    paddingRight: '1em',
    lineHeight: '1.6'
  },
  responsability: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    marginBottom: '0.5em'
  }
}

const WorkExperienceDetails = ({ classes, workExperienceData }) => {
  const { companyName, responsabilities, role, workDescription, workPeriod } = workExperienceData
  return (
    <div className={classes.workExperienceDetailsContainer}>
      <div className={classes.workExperienceRole}>{role}</div>
      <div className={classes.companyName}>Company: {companyName}</div>
      <div className={classes.workPeriod}>{workPeriod}</div>
      <div className={classes.workDescription}>{workDescription}</div>
      <div className={classes.title}>Responsabilities:</div>
      <ul className={classes.responsabilitiesList}>
        {
          responsabilities.map((responsability) => {
            return (
              <li className={classes.responsability}>{responsability}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

WorkExperienceDetails.propTypes = {
  workExperienceData: PropTypes.object.isRequired
}

export default withStyles(styles)(WorkExperienceDetails)
