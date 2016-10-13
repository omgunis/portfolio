import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as contactActions from '../../actions/contactActions';
import ContactForm from './ContactForm';
import toastr from 'toastr';

class ContactPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      contact: Object.assign({}, props.contact),
      errors: {},
      sending: false
    };

    this.updateContactState = this.updateContactState.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  updateContactState(event){
    const field = event.target.name;
    let contact = this.state.contact;
    contact[field] = event.target.value;
    return this.setState({contact:contact});
  }

  contactFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if(this.state.contact.name.length === 0){
      errors.name = 'Please enter a name';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveContact(event){
    event.preventDefault();

    if(!this.contactFormIsValid()){
      return;
    }

    this.setState({sending: true});
    this.props.actions.saveContact(this.state.contact)
      .then(() => this.formSuccess())
      .catch(error => {
        toastr.error(error);
        this.setState({sending: false});
      });
  }

  formSuccess(){
    this.state.contact.name = '';
    this.state.contact.email = '';
    this.state.contact.subject = '';
    this.state.contact.message = '';
    this.setState({sending: false});
    toastr.success('Message sent!');
    // this.context.router.push('/contact');
  }

  render(){
    return(
      <div>
        <h1>Contact</h1>
        <ContactForm
          onChange={ this.updateContactState }
          onSend={ this.saveContact }
          contact={ this.state.contact }
          errors={ this.state.errors }
          sending={ this.state.sending }
        />
      </div>
    );
  }
}

ContactPage.propTypes = {
  contact: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ContactPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  let contact = { id: 2, name: '', email: '', subject: '', message: ''};
  return {
    contact: contact
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
