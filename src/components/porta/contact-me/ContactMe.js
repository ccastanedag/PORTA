import React, { Component } from 'react'
import withStyles from 'react-jss'
import MediaQuery from 'react-responsive'
import MobileHeader from '../side-header/MobileHeader'
import PageTitle from '../../shared/PageTitle'
import ButtonFactory from '../../shared/ButtonFactory'
import Footer from '../../shared/Footer'

const styles = {
  contactMeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    height:'100%'
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
    height:'100%'
  },
  labelInput: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    fontFamily: 'Lato',
    fontSize:'1em',
    color: '#86A8E7',
    padding: '0.35em 0'
  },
  input:{
    border: '1px solid #EAEFFB',
    background: '#F4F7FD',
    padding: '0.5em 0.2em',
    color: '#86A8E7',
    borderRadius: '5px',
    marginTop:'0.35em'
  },
  sendButton: {
    border: 'none',
    background: 'rgba(255,255,255,0)',
    padding: '0',
    alignSelf: 'flex-start',
    marginLeft:'0.35em'
  },
  labelTextArea:{
    extend:'labelInput',
    flex:'1',
    marginBottom: '0.75em'
  },
  textarea:{
    extend:'input',
    height:'100%'
  },
  '@media screen and (max-width:1199px)' : {
    '@global' : {
      html: {
       height:'100%'
      },
      body: {
        height:'100%'
       },
      '#root' : {
        height:'100%'
      } 
    }
  },
  '@media screen and (max-height: 700px)' : {
    contactMeContainer : {
      height:'700px'
    }
  }
}

export class ContactMe extends Component {
  state = {
    yourName: '',
    yourEmail: '',
    subject: '',
    message: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert('A message have been submitted !')
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    const { classes } = this.props
    const { yourName, yourEmail, subject, message } = this.state
    return (
      <div className={classes.contactMeContainer}>
        <MediaQuery maxWidth={1199}>
          <MobileHeader ownerName='Carlos Castañeda' />
        </MediaQuery>
        <PageTitle fontAwesomeIcon='fas fa-envelope' pageTitle='Contact Me' />
        <div className={classes.floatingBox}>
          <form onSubmit={this.handleSubmit} className={classes.form}>
            <label className={classes.labelInput}>
              Your Name:
              <input
                type='text'
                name='yourName'
                onChange={this.handleChange}
                value={yourName}
                className={classes.input}
              />
            </label>
            <label className={classes.labelInput}>
              Your Email:
              <input
                type='email'
                name='yourEmail'
                onChange={this.handleChange}
                value={yourEmail}
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
                rows={5}/>
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
    )
  }
}

export default withStyles(styles)(ContactMe)
