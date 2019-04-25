import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { convertSlugToTitle } from '../../../utils/categoriesUtils'
import handleLoadingPortafolioList from '../../../store/actions/porta/portafolio/PortafolioListAction'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ProjectSummary from './ProjectSummary'

const styles = {
  portafolioListContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    paddingTop: '1.25em'
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
    if(this.props.match.params.categoryId !== prevProps.match.params.categoryId){
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
      return (<div>LOADING...</div>)

    if (error)
      return (
        <div>
          THERE WAS AN ERROR !!!
          <p>{error}</p>
          {console.log('ERROR: ', error)}
        </div>
      )

    if (portafolioListData !== undefined) {
      return (
        <div className={classes.portafolioListContainer}>
          {portafolioListData.projects.map((project) => {
            return (
              <ProjectSummary 
                key={project.projectName}
                projectSummary={project} 
                technologiesFb={portafolioListData.technologies}
                match={this.props.match} />
            )
          })}
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
