import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { convertSlugToTitle } from '../../../utils/categoriesUtils'
import handleLoadingPortafolioList from '../../../store/actions/porta/portafolio/PortafolioListAction'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ProjectSummary from './ProjectSummary'
import Loading from '../../shared/Loading'
import Message from '../../shared/Message'
import MediaQuery from 'react-responsive'
import MasonryLayout from '../../shared/MasonryLayout'

const styles = {
  portafolioListContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%'
  },
  '@media screen and (min-width:1200px)': {
    portafolioListContainer: {
      flexDirection: 'row',
      flex: '1',
      flexWrap: 'wrap'
    }
  }
}

export class PortafolioList extends Component {
  state = {
    isFetching: false,
    error: '',
    portafolioListData: undefined
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isFetching: this.props.isFetching,
        error: this.props.error,
        portafolioListData: this.props.portafolioListData
      })
    }
    if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
      const categoryId = convertSlugToTitle(this.props.match.params.categoryId)
      this.props.dispatch(handleLoadingPortafolioList(categoryId))
    }
  }

  componentDidMount() {
    const categoryId = convertSlugToTitle(this.props.match.params.categoryId)
    this.props.dispatch(handleLoadingPortafolioList(categoryId))
  }

  render() {
    const { classes } = this.props
    const { isFetching, error, portafolioListData } = this.state

    if (isFetching)
      return (<Loading />)

    if (error)
      return (
        <Message
          fontAwesomeIcon='fas fa-exclamation-circle'
          title='OOPS!'
          subTitle="COULDN'T CONNECT TO THE DATABASE"
          message="The reason could be the database is temporarily unavailable, please try again later." />
      )

    if (portafolioListData !== undefined) {
      let projectSummaryArray = portafolioListData.projects.map((project) => {
        return (
          <ProjectSummary
            key={project.projectName}
            projectSummary={project}
            technologiesFb={portafolioListData.technologies}
            match={this.props.match} />
        )
      })

      return (
        <div className={classes.portafolioListContainer}>
          <MediaQuery maxWidth={1199}>
            {
              projectSummaryArray.map((project) => {
                return project
              })
            }
          </MediaQuery>
          <MediaQuery minWidth={1200}>
            <MasonryLayout>
              {
                projectSummaryArray.map((project) => {
                  return project
                })
              }
            </MasonryLayout>
          </MediaQuery>
        </div>
      )
    }

    return null
  }
}

const mapStateToProps = (state) => {
  const { portafolioList } = state
  const { data, isFetching, error } = portafolioList

  return {
    isFetching,
    error,
    portafolioListData: data
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(PortafolioList)
