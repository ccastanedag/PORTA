import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MobileHeader from '../side-header/MobileHeader'
import PageTitle from '../../shared/PageTitle'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withStyles from 'react-jss'
import handleLoadingWorkExperience from '../../../store/actions/porta/work-experience/WorkExperienceAction'
import WorkExperienceDetails from './WorkExperienceDetails'

const styles = {
  workExperienceContainer:{
    display: 'flex',
    flexDirection:'column'
  },
  workExperienceListContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
}

export class WorkExperience extends Component {
  state = {
    isFetching: false,
    error: '',
    workExperienceData: undefined
  }

  componentDidMount() {
    this.props.dispatch(handleLoadingWorkExperience())
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isFetching: this.props.isFetching,
        error: this.props.error,
        workExperienceData: this.props.workExperienceData
      })
    }
  }

  render() {
    const { classes } = this.props
    const { isFetching, error, workExperienceData } = this.state

    if (isFetching)
      return (<div>LOADING...</div>)

    if (error)
      return (
        <div>
          THERE WAS AN ERROR !!!
        <p>{error}</p>
          {console.log('ERROR: ', error)}
        </div>
      )

    if (workExperienceData != undefined) {
      return (
        <div className={classes.workExperienceContainer}>
          <MediaQuery maxWidth={1199}>
            <MobileHeader ownerName='Carlos Castañeda' />
            <PageTitle fontAwesomeIcon='fas fa-briefcase' pageTitle='Work Experience' />
          </MediaQuery>
          <div className={classes.workExperienceListContainer}>
            {
              workExperienceData.map((job)=>{
                return (
                  <WorkExperienceDetails workExperienceData={job}/>
                )
              })
              }
          </div>
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = (state) => {
  const { workExperience } = state
  const { isFetching, error, data } = workExperience
  return {
    isFetching,
    error,
    workExperienceData: data
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(WorkExperience)
