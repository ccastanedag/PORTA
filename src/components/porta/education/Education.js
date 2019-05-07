import React, { Component } from 'react'
import MobileHeader from '../side-header/MobileHeader'
import MediaQuery from 'react-responsive'
import PageTitle from '../../shared/PageTitle'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { connect } from 'react-redux'
import handleLoadingEducation from '../../../store/actions/porta/education/EducationAction'
import TagsContainer from '../../shared/TagsContainer'
import PropTypes from 'prop-types'
import Footer from '../../shared/Footer'
import Loading from '../../shared/Loading'
import Message from '../../shared/Message'

const styles = {
  educationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  educationInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    alignSelf: 'center'
  },
  educationListContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  educationInfoContainerDesktop: {
    flex: '1',
    width: '70%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  // BEGIN - EducationBox styling
  educationBoxContainer: {
    background: 'white',
    borderRadius: '10px',
    minHeight: '100px',
    boxShadow: '0 0.7em 18px #EAEEF8',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0.35em 0.5em 0.35em 1em',
    margin: '0.35em 0',
    border: '3px solid #F8F8F8'
  },
  educationBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  time: {
    fontFamily: "Lato script=all rev=1",
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892'
  },
  school: {
    fontFamily: "Lato script=all rev=2",
    fontWeight: '400',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    fontSize: '1em',
    color: '#86A8E7'
  },
  course: {
    extend: 'time',
    fontSize: '0.9em'
  },
  '@media screen and (min-width:768px)': {
    time: {
      fontSize: '1em'
    },
    school: {
      fontSize: '1.2em'
    },
    course: {
      fontSize: '1.1em'
    }
  },
  // END - EducationBox styling
  educationContainerDesktop: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  '@media screen and (min-width:1200px)': {
    educationContainer: {
      flex: '1'
    },
    timeLine: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      position: 'relative',
      '&:after': {
        background: '#86A8E7',
        content: '""',
        position: 'absolute',
        left: 'calc(50% - 2px)',
        width: '4px',
        height: '100%',
      }
    },
    circle: {},
    element: {
      position: 'relative',
      display: 'flex',
      width: '45%',
      alignSelf: 'flex-end',
      '&:nth-child(odd)': {
        alignSelf: 'flex-start'
      },
      '& $circle': {
        position: 'absolute',
        background: '#86A8E7',
        border: '5px solid #86A8E7',
        borderRadius: '50%',
        top: 'calc(50% - 5px)',
        left: 'calc(-11% - 5px)',
        width: '10px',
        height: '10px',
        zIndex: '6',
        boxSizing: 'border-box'
      },
      '&:nth-child(odd) $circle': {
        position: 'absolute',
        background: '#86A8E7',
        border: '5px solid #86A8E7',
        borderRadius: '50%',
        top: 'calc(50% - 5px)',
        right: 'calc(-11.25% - 5px)',
        left:'auto',
        width: '10px',
        height: '10px',
        zIndex: '6'
      }
    },
    tagsContainer: {
      alignSelf: 'stretch'
    }
  }
}

const EducationBox = ({ time, school, course, classes }) => {
  return (
    <div className={classes.educationBoxContainer}>
      <div className={classes.educationBox}>
        <div className={classes.time}>{time}</div>
        <div className={classes.school}>{school}</div>
        <div className={classes.course}>{course}</div>
      </div>
    </div>
  )
}

EducationBox.propTypes = {
  time: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}




export class Education extends Component {
  state = {
    isFetching: false,
    error: '',
    EducationData: undefined
  }

  componentDidMount() {
    this.props.dispatch(handleLoadingEducation())
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isFetching: this.props.isFetching,
        //error: this.props.error,
        EducationData: this.props.EducationData
      })
    }
  }

  render() {
    const { isFetching, error, EducationData } = this.state
    const { classes } = this.props
    if (isFetching)
      return (<Loading />)

    if (error)
      return (<Message 
        fontAwesomeIcon='fas fa-exclamation-circle' 
        title='OOPS!' 
        subTitle="COULDN'T CONNECT TO THE DATABASE"
        message="The reason could be the database is temporarily unavailable, please try again later."/>)

    if (EducationData !== undefined) {
      const { educationArray, techArray } = EducationData
      return (
        <div className={classes.educationContainer}>
          <MediaQuery maxWidth={1199}>
            <MobileHeader ownerName='Carlos Castañeda' />
            <PageTitle fontAwesomeIcon='fas fa-graduation-cap' pageTitle='Education' />
            <div className={classes.educationInfoContainer}>
              <TagsContainer title='Main Skills:' tagsArrayFb={techArray} />
              <div className={classes.educationListContainer}>
                {educationArray.map((education) => {
                  return (
                    <EducationBox
                      key={education.school}
                      classes={classes}
                      time={education.time}
                      school={education.school}
                      course={education.course} />
                  )
                })
                }
              </div>
            </div>
            <Footer />
          </MediaQuery>
          <MediaQuery minWidth={1200}>
            <div className={classes.educationContainerDesktop}>
              <PageTitle fontAwesomeIcon='fas fa-graduation-cap' pageTitle='Education' />
              <div className={classes.educationInfoContainerDesktop}>
                <div className={classes.tagsContainer}>
                  <TagsContainer title='Main Skills:' tagsArrayFb={techArray} />
                </div>
                <div className={classes.timeLine}>
                  {educationArray.map((education) => {
                    return (
                      <div className={classes.element} key={education.school}>
                        <EducationBox
                          classes={classes}
                          time={education.time}
                          school={education.school}
                          course={education.course} />
                        <span className={classes.circle}></span>
                      </div>
                    )
                  })
                  }
                </div>
              </div>
              <Footer />
            </div>
          </MediaQuery>
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = (state) => {
  const { education } = state
  const { isFetching, error, data } = education
  return {
    isFetching,
    error,
    EducationData: data
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Education)

