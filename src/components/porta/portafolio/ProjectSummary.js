import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { getElementFromListByAttribute } from '../../../utils/utils'
import Tag from '../../shared/Tag'
import ButtonFactory from '../../shared/ButtonFactory'
import { convertToSlug } from '../../../utils/utils'
import { Link } from 'react-router-dom'
import Title from '../../shared/Title'
import Paragraph from '../..//shared/Paragraph'

const styles = {
  projectSummaryContainer: {
    background: 'white',
    borderRadius: '10px',
    minHeight: '200px',
    boxShadow: '0 0.7em 18px #EAEEF8',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.35em',
    margin: '0.5em 0',
    border: '3px solid #F8F8F8'
  },
  projectImage: {
    width: '95%',
    borderRadius: '5px',
    alignSelf: 'center',
    objectFit: 'contain'
  },
  linkImage:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  projectInfoContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: '0.5em 0'
  },
  technologiesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '0.5em',
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

  },
  '@media screen and (min-width: 768px)': {
    projectSummaryContainer: {
      paddingTop: '1em'
    }
  },
  '@media screen and (min-width: 1200px)': {
    projectSummaryContainer: {
      margin: '0em 0.5em'
    }
  }
}


const ProjectSummary = ({ classes, projectSummary, technologiesFb, match }) => {
  const { projectImages, projectName, shortDescription, technologies, buttons } = projectSummary
  return (
    <div className={classes.projectSummaryContainer}>
      <Link className={classes.linkImage} to={`/portafolio/${match.params.categoryId}/${convertToSlug(projectName)}`}>
        <img className={classes.projectImage} src={`${projectImages[0]}`} alt={`Project ${projectName}`} />
      </Link>
      <div className={classes.projectInfoContainer}>
        <Link to={`/portafolio/${match.params.categoryId}/${convertToSlug(projectName)}`}>
          <Title titleText={projectName}/>
          <Paragraph paragraphText={shortDescription}/>
        </Link>
        <div className={classes.technologiesContainer}>
          {
            technologies.map((technology) => {
              const tag = getElementFromListByAttribute(technologiesFb, 'technologyName', technology)
              return (
                <Tag key={tag.technologyName} tagLogo={tag.technologyLogo} tagText={tag.technologyName} />
              )
            })
          }
        </div>
        <div className={classes.buttonsContainer}>
          {
            buttons.map((button) => {
              return (
                <ButtonFactory
                  key={button.buttonText}
                  style={{ flexBasis: 'auto' }}
                  buttonText={button.buttonText}
                  fontAwesomeIcon={button.fontAwesomeIcon}
                  redirectTo={button.redirectTo}
                  gradient={{ start: '#8989CB', end: '#86A8E7' }} />
              )
            })
          }
          <ButtonFactory
            buttonText='Read More'
            fontAwesomeIcon='far fa-eye'
            redirectTo=''
            linkTo={`/portafolio/${match.params.categoryId}/${convertToSlug(projectName)}`}
            gradient={{ start: '#8989CB', end: '#86A8E7' }} />
        </div>
      </div>
    </div>
  )
}

ProjectSummary.propTypes = {
  projectSummary: PropTypes.object.isRequired,
  technologiesFb: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

export default withStyles(styles)(ProjectSummary)
