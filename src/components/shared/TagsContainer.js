import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Tag from './Tag'
import Separator from './Separator'
import { getElementFromListByAttribute } from '../../utils/utils'

const styles = {
  title: {
    fontFamily: 'Lato',
    fontSize: '0.75em',
    color: '#86A8E7'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '@media screen and (min-width:768px)': {
    title: {
      fontSize: '0.8em',
    }
  },
  '@media screen and (min-width:1200px)': {
    title: {
      fontSize: '0.9em',
    }
  }
}

const TagsContainer = ({ classes, title, tagsArray, tagsArrayFb }) => {
  return (
    <div className={classes.tagsContainer}>
      <div className={classes.title}>{title}</div>
      <Separator width='100%' />
      <div className={classes.tags}>
        {/* If we want to get SOME technologies tags (defined by tagsArray)  */}
        {tagsArray.length !== 0 &&
          tagsArray.map((tag) => {
            const techTag = getElementFromListByAttribute(tagsArrayFb, 'technologyName', tag)
            return (
              <Tag key={techTag.technologyName} tagLogo={techTag.technologyLogo} tagText={techTag.technologyName} />
            )
          })
        }
        {/* If we want to get ALL technologies tags  */}
        {
          tagsArray.length === 0 &&
          tagsArrayFb.map((tagFb) => {
            return (
              <Tag key={tagFb.technologyName} tagLogo={tagFb.technologyLogo} tagText={tagFb.technologyName} />
            )
          })
        }
      </div>
      <Separator width='100%' />
    </div>
  )
}

TagsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  tagsArrayFb: PropTypes.array.isRequired
}

TagsContainer.defaultProps = {
  tagsArray: []
}

export default withStyles(styles)(TagsContainer)
