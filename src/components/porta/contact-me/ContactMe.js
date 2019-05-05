import React, { Component } from 'react'
import withStyles from 'react-jss'
import MediaQuery from 'react-responsive'
import MobileHeader from '../side-header/MobileHeader'
import PageTitle from '../../shared/PageTitle'
import ButtonFactory from '../../shared/ButtonFactory'
import Footer from '../../shared/Footer'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import PropTypes from 'prop-types'
import green from '@material-ui/core/colors/green'
import IconButton from '@material-ui/core/IconButton'
import classNames from 'classnames'
import CloseIcon from '@material-ui/icons/Close'
import { withStyles as withStylesUI } from '@material-ui/core/styles'
import {
  REACT_APP_EMAILJS_RECEIVER as receiverEmail,
  REACT_APP_EMAILJS_TEMPLATEID as template
} from '../../../env'

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon
}

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

const styles = {
  contactMeContainer: {
    width: '100%',
    height: '100%'
  },
  contactMeContainerDesktop: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  contactMeContainerMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%'
  },
  floatingBox: {
    flex: '1',
    background: 'white',
    borderRadius: '10px',
    minHeight: '200px',
    boxShadow: '0 0.7em 18px #EAEEF8',
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1em 0.7em',
    margin: '0.35em 0',
    border: '3px solid #f8f8f8',
    alignSelf: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  labelInput: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    fontFamily: 'Lato',
    fontSize: '1em',
    color: '#86A8E7',
    padding: '0.35em 0'
  },
  input: {
    border: '1px solid #EAEFFB',
    background: '#F4F7FD',
    padding: '0.5em 0.2em',
    color: '#86A8E7',
    borderRadius: '5px',
    marginTop: '0.35em'
  },
  sendButton: {
    border: 'none',
    background: 'rgba(255,255,255,0)',
    padding: '0',
    alignSelf: 'flex-start',
    marginLeft: '0.35em'
  },
  labelTextArea: {
    extend: 'labelInput',
    flex: '1',
    marginBottom: '0.75em'
  },
  textarea: {
    extend: 'input',
    height: '100%'
  },
  nameEmail: {
    alignSelf: 'center',
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    '& $labelInput': {
      width: '49%'
    }
  },
  '@media screen and (max-width:1199px)': {
    '@global': {
      html: {
        height: '100%'
      },
      body: {
        height: '100%'
      },
      '#root': {
        height: '100%'
      }
    }
  },
  '@media screen and (max-height: 700px)': {
    contactMeContainerMobile: {
      height: '700px'
    }
  },
  '@media screen and (min-width: 1200px)': {
    contactMeContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    floatingBox: {
      width: '70%'
    }
  }
}

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  )
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'error']).isRequired,
}

const MySnackbarContentWrapper = withStylesUI(styles1)(MySnackbarContent)

export class ContactMe extends Component {
  state = {
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
    successOpen: false,
    errorOpen: false,
    emptyOpen: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { senderName, senderEmail, subject, message } = this.state
    //TODO : Validate fields emptiness
    if ((senderName !== '') && 
        (senderEmail !== '') && 
        (subject !== '') && 
        (message !== '')) {
      this.sendEmail(
        template,
        receiverEmail,
        senderName,
        senderEmail,
        subject,
        message
      )
    } else {
      this.setState({
        emptyOpen : true
      })
    }
  }

  sendEmail = (templateId, receiverEmail, senderName, senderEmail, subject, message) => {
    window.emailjs.send(
      'mailgun',
      templateId,
      {
        senderName,
        senderEmail,
        subject,
        message
      })
      .then(response => {
        this.setState({
          senderName: '',
          senderEmail: '',
          subject: '',
          message: ''
        })

        // Show the Snackbar message - Success
        this.setState({
          successOpen: true
        })
      })
      .catch(error => {
        // Show the Snackbar message - Error
        this.setState({
          errorOpen: true
        })
        console.error('Failed to send email. Error: ', error)
      })
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleClose = (event) => {
    this.setState({
      successOpen: false,
      errorOpen: false,
      emptyOpen: false
    });
  }

  render() {
    const { classes } = this.props
    const { senderName, senderEmail, subject, message } = this.state
    return (
      <div className={classes.contactMeContainer}>
        <MediaQuery maxWidth={1199}>
          <div className={classes.contactMeContainerMobile}>
            <MobileHeader ownerName='Carlos Castañeda' />
            <PageTitle fontAwesomeIcon='fas fa-envelope' pageTitle='Contact Me' />
            <div className={classes.floatingBox}>
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <label className={classes.labelInput}>
                  Your Name:
              <input
                    type='text'
                    name='senderName'
                    onChange={this.handleChange}
                    value={senderName}
                    className={classes.input}
                  />
                </label>
                <label className={classes.labelInput}>
                  Your Email:
              <input
                    type='email'
                    name='senderEmail'
                    onChange={this.handleChange}
                    value={senderEmail}
                    className={classes.input}
                  />
                </label>
                <label className={classes.labelInput}>
                  Subject:
              <input
                    type='text'
                    name='subject'
                    onChange={this.handleChange}
                    value={subject}
                    className={classes.input}
                  />
                </label>
                <label className={classes.labelTextArea}>
                  Message:
              <textarea
                    name='message'
                    value={message}
                    onChange={this.handleChange}
                    className={classes.textarea}
                    rows={5} />
                </label>
                <button type='submit' className={classes.sendButton}>
                  <ButtonFactory
                    buttonText='Send'
                    fontAwesomeIcon='fas fa-paper-plane'
                    redirectTo=''
                    gradient={{ start: '#8989CB', end: '#86A8E7' }} />
                </button>
              </form>
            </div>
            <Footer />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={1200} className={classes.desktopContent}>
          <div className={classes.contactMeContainerDesktop}>
            <PageTitle fontAwesomeIcon='fas fa-envelope' pageTitle='Contact Me' />
            <div className={classes.floatingBox}>
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <div className={classes.nameEmail}>
                  <label className={classes.labelInput}>
                    Your Name:
              <input
                      type='text'
                      name='senderName'
                      onChange={this.handleChange}
                      value={senderName}
                      className={classes.input}
                    />
                  </label>
                  <label className={classes.labelInput}>
                    Your Email:
              <input
                      type='email'
                      name='senderEmail'
                      onChange={this.handleChange}
                      value={senderEmail}
                      className={classes.input}
                    />
                  </label>
                </div>
                <label className={classes.labelInput}>
                  Subject:
              <input
                    type='text'
                    name='subject'
                    onChange={this.handleChange}
                    value={subject}
                    className={classes.input}
                  />
                </label>
                <label className={classes.labelTextArea}>
                  Message:
              <textarea
                    name='message'
                    value={message}
                    onChange={this.handleChange}
                    className={classes.textarea}
                    rows={5} />
                </label>
                <button type='submit' className={classes.sendButton}>
                  <ButtonFactory
                    buttonText='Send'
                    fontAwesomeIcon='fas fa-paper-plane'
                    redirectTo=''
                    gradient={{ start: '#8989CB', end: '#86A8E7' }} />
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </MediaQuery>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.successOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="Thanks for your message. I'll contact you as soon as possible"
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.errorOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="error"
            message="Failed to send email."
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.emptyOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="error"
            message="All fields are required. Thanks!"
          />
        </Snackbar>
      </div>
    )
  }
}

export default withStyles(styles)(ContactMe)
