import React from 'react'
import withStyles from 'react-jss'

const styles = {
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: '#F4F7FD',
    padding: '1em',
    marginTop: '2em'
  },
  developedBy: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    color: '#757892',
    fontSize: '0.85em'
  },
  madeWithContainer:{
    display: 'flex',
    alignItems: 'center'
  },
  madeWith: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.7em',
    marginRight: '0.65em',
    color: '#757892'
  },
  '@media screen and (min-width:1200px)':{
    footerContainer: {
      alignSelf:'stretch',
      alignItems: 'center'
    }
  }
}
const Footer = ({ classes }) => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.developedBy}>Developed by Carlos Castañeda</div>
      <div className={classes.madeWithContainer}>
        <div className={classes.madeWith}>Made with React</div>
        <img height={24} src='https://i.imgur.com/XYvTK0w.png' alt='react logo' />
      </div>

    </div>
  )
}

export default withStyles(styles)(Footer)
