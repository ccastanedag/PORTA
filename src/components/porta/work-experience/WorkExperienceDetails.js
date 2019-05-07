import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import SubTitle from '../../shared/SubTitle'
import Paragraph from '../../shared/Paragraph'
import SimpleList from '../../shared/SimpleList'

const styles = {
  workExperienceDetailsContainer: {
    background: 'white',
    borderRadius: '10px',
    minHeight: '200px',
    boxShadow: '0 0.7em 18px #EAEEF8',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '3px solid #F8F8F8',
    margin: '0.35em 0 0.75em 0'
  },
  workExperienceRole: {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    background: 'linear-gradient(to right, #86A8E7 0%, #8989CB 100%)',
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontStyle: 'normal',
    padding: '0.45em 0 0.45em 1em',
    textTransform: 'uppercase',
    fontSize:'1em'
  },
  workExperienceContent: {
    alignSelf: 'center',
    padding: '0.5em 1em 1em 1em'
  },
  '@media screen and (min-width:768px)':{
    workExperienceRole:{
      fontSize: '1.2em'
    },
    workExperienceContent:{
      padding: '0.75em 1.25em 1.25em 1.25em'
    }
  },
  '@media screen and (min-width:1200px)':{
    
  }
}

const WorkExperienceDetails = ({ classes, workExperienceData }) => {
  const { companyName, responsabilities, role, workDescription, workPeriod } = workExperienceData
  return (
    <div className={classes.workExperienceDetailsContainer}>
      <div className={classes.workExperienceRole}>{companyName}</div>
      <div className={classes.workExperienceContent}>
        <SubTitle subTitleText={role} uppercase={true}/>
        <SubTitle subTitleText={workPeriod} />
        <Paragraph paragraphText={workDescription} />
        <SubTitle subTitleText='Responsabilities:' />
        <SimpleList items={responsabilities} />
      </div>
    </div>
  )
}

WorkExperienceDetails.propTypes = {
  workExperienceData: PropTypes.object.isRequired
}

export default withStyles(styles)(WorkExperienceDetails)
