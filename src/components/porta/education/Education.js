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
  // BEGIN - EducationBox styling
  educationBoxContainer: {
    background: 'white',
    borderRadius: '10px',
    minHeight: '100px',
    boxShadow: '0 0.7em 18px #EAEEF8',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent : 'center',
    padding: '0.35em 0.5em 0.35em 1em',
    margin: '0.35em 0',
    border: '3px solid #F8F8F8'
  },
  educationBox:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center'
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
  '@media screen and (min-width:768px)':{
    time : {
      fontSize: '1em'
    },
    school: {
      fontSize: '1.2em'
    },
    course: {
      fontSize: '1.1em'
    }
  }
  // END - EducationBox styling
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
        error: this.props.error,
        EducationData: this.props.EducationData
      })
    }
  }

  render() {
    const { isFetching, error, EducationData } = this.state
    const { classes } = this.props
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

    if (EducationData !== undefined) {
      const { educationArray, techArray } = EducationData
      return (
        <div className={classes.educationContainer}>
          <MediaQuery maxWidth={1199}>
            <MobileHeader ownerName='Carlos Castañeda' />
          </MediaQuery>
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

