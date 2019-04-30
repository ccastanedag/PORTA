import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MobileHeader from '../side-header/MobileHeader'
import { withStyles } from '@material-ui/core'
import { convertSlugToTitle } from '../../../utils/categoriesUtils'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { compose } from 'redux'
import { connect } from 'react-redux'
import handleLoadingProjectDetail from '../../../store/actions/porta/portafolio-details/ProjectDetailAction'
import ButtonFactory from '../../shared/ButtonFactory'
import Separator from '../../shared/Separator'
import { getElementFromListByAttribute } from '../../../utils/utils'
import Tag from '../../shared/Tag'
import Footer from '../../shared/Footer'
import { Link } from 'react-router-dom'

const styles = {
  projectDetailContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
  },
  navBarContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  portafolio: {
    fontFamily: 'Montserrat',
    fontSize: '1em',
    color: '#757892',
    flex: 'auto',
    background: '#F4F7FD',
    border: '1px solid #EAEFFB',
    textAlign: 'center',
    display: 'flex',
    padding: '0.85em'
  },
  icon: {
    marginRight: '0.5em',
    fontSize: '1.25em'
  },
  section: {
    fontFamily: 'Montserrat',
    fontSize: '1em',
    color: '#757892',
    flex: 'auto',
    background: '#F4F7FD',
    border: '1px solid #EAEFFB',
    textAlign: 'center',
    padding: '0.85em'
  },
  projectInfoContainer: {
    width: '90%',
    alignSelf: 'center',
    padding: '1em 0'
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5em  0'
  },
  techs: {
    fontFamily: 'Lato',
    fontSize: '1em',
    color: '#86A8E7'
  },
  technologiesContainer: {
    width: '80%',
    alignSelf: 'center'
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  projectName: {
    fontFamily: 'Montserrat',
    fontSize: '1.25em',
    color: '#757892',
    marginBottom: '0.5em'
  },
  developmentTime: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '1em',
    color: '#757892',
    marginBottom: '0.5em'
  },
  longDescription: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    marginBottom: '0.75em',
    lineHeight: '1.6'
  },
  title: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    marginBottom: '0.5em'
  },
  responsabilityList: {
    paddingLeft: '1em'
  },
  responsability: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    marginBottom: '0.5em',
    lineHeight:'1.6'
  },
  otherList: {
    padding: '0'
  },
  other: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    '&:nth-child(2n+1)': {
      background: '#F4F7FD'
    },
    padding: '0.3em 0 0.3em 0.5em',
    listStyleType: 'none'
  },
  '@media screen and (min-width: 768px)': {
    projectName: {
      fontSize: '1.65em'
    },
    developmentTime: {
      fontSize: '1.25em'
    },
    longDescription: {
      fontSize: '0.9em',
    },
    title: {
      fontSize: '1.25em'
    },
    responsability: {
      fontSize: '0.9em'
    },
    other: {
      fontSize: '0.9em',
      padding: '0.3em 0 0.3em 0.55em',
    }
  },
  '@media screen and (min-width: 1200px)': {
    projectDetailContainer: {
      width: '80%',
      flex: 'initial'
    },
    projectInfoContainer: {
      width: '80%'
    },
    longDescription: {
      fontSize: '1em',
    },
    responsability: {
      fontSize: '1em'
    },
    other: {
      fontSize: '1em',
      padding: '0.3em 0 0.3em 0.55em',
    },
    section: {
      '&:first-child': {
        '&:hover': {
          fontWeight: '600'
        }
      }
    },
    portafolioDetail:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }
  }
}

export class PortafolioDetail extends Component {
  state = {
    isFetching: false,
    error: '',
    PortafolioDetailData: undefined
  }

  componentDidMount() {
    const projectId = convertSlugToTitle(this.props.match.params.projectId)
    console.log('OJO', projectId)
    this.props.dispatch(handleLoadingProjectDetail(projectId))
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isFetching: this.props.isFetching,
        error: this.props.error,
        PortafolioDetailData: this.props.PortafolioDetailData
      })
    }
  }

  render() {
    const { classes, match } = this.props
    const { categoryId, projectId } = match.params
    const { isFetching, error, PortafolioDetailData } = this.state

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

    if (PortafolioDetailData !== undefined) {
      const { projects, technologies: technologiesFb } = PortafolioDetailData
      if (projects.length === 1) {
        const {
          projectImages,
          projectName,
          buttons,
          technologies,
          developmentTime,
          longDescription,
          responsabilities,
          othersUsed } = projects[0]
        return (
          <div className={classes.portafolioDetail}>
            <div className={classes.projectDetailContainer}>
              <MediaQuery maxWidth={1199}>
                <MobileHeader ownerName='Carlos Castañeda' />
              </MediaQuery>
              <div className={classes.navBarContainer}>
                <MediaQuery maxWidth={1199}>
                  <Link to={`/portafolio/`} className={classes.portafolio}>
                    <i className={`fas fa-folder-open ${classes.icon}`}></i>
                    <div>Portafolio</div>
                  </Link>
                </MediaQuery>
                <Link to={`/portafolio/${categoryId}`} className={classes.section}>{convertSlugToTitle(categoryId)}</Link>
                <div className={classes.section}>{convertSlugToTitle(projectId)}</div>
              </div>
              <div className={classes.projectInfoContainer}>
                <Carousel
                  showThumbs={false}
                  dynamicHeight={true}
                  swipeScrollTolerance={0}>
                  {
                    projectImages.map((image) => {
                      return (
                        <div>
                          <img src={image} />
                        </div>
                      )
                    })
                  }
                </Carousel>
                <div className={classes.buttonsContainer}>
                  {
                    buttons.map((button) => {
                      return (
                        <ButtonFactory
                          buttonText={button.buttonText}
                          fontAwesomeIcon={button.fontAwesomeIcon}
                          redirectTo={button.redirectTo}
                          gradient={{ start: '#8989CB', end: '#86A8E7' }} />
                      )
                    })
                  }
                </div>
              </div>
              <div className={classes.technologiesContainer}>
                <div className={classes.techs}>Main Technologies:</div>
                <Separator width='100%' />
                <div className={classes.tagContainer}>
                  {
                    technologies.map((technology) => {
                      const techTag = getElementFromListByAttribute(technologiesFb, 'technologyName', technology)
                      return (
                        <Tag tagLogo={techTag.technologyLogo} tagText={techTag.technologyName} />
                      )
                    })
                  }
                </div>
                <Separator width='100%' />
                <div className={classes.projectName}>{projectName}</div>
                <div className={classes.developmentTime}>Development Time: {developmentTime}</div>
                <div className={classes.longDescription}>{longDescription}</div>
                <div className={classes.title}>Responsabilities:</div>
                <ul className={classes.responsabilityList}>
                  {
                    responsabilities.map((responsability) => {
                      return (
                        <li className={classes.responsability}>{responsability}</li>
                      )
                    })
                  }
                </ul>
                <div className={classes.title}>Other technologies, libraries and concepts used:</div>
                <ul className={classes.otherList}>
                  {
                    othersUsed.map((other) => {
                      return (
                        <li className={classes.other}>+  {other}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <Footer />
          </div>
        )
      } else {
        return (
          <div>PAGE NOT FOUND !!!</div>
        )
      }
    }
    return null
  }
}

const mapStateToProps = (state) => {
  const { projectDetail } = state
  const { isFetching, error, data } = projectDetail
  return {
    isFetching,
    error,
    PortafolioDetailData: data
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(PortafolioDetail)
