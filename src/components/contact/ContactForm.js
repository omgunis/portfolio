import React from 'react';
import TextInput from '../common/TextInput';

const ContactForm = ({ contact, onSend, onChange, sending, errors }) => {
  return (
      <form>
        <TextInput
          name="name"
          label="Name"
          value={ contact.name }
          onChange={ onChange }
          error={ errors.title }
        />

        <TextInput
          name="email"
          label="Email"
          value={ contact.email }
          onChange={ onChange }
          error={ errors.title }
        />

        <TextInput
          name="subject"
          label="Subject"
          value={ contact.subject }
          onChange={ onChange }
          error={ errors.title }
        />

        <TextInput
          name="message"
          label="Message"
          value={ contact.message }
          onChange={ onChange }
          error={ errors.title }
        />

        <input
          type="submit"
          disabled={ sending }
          value={ sending ? "Sending..." : "Sent"}
          className="btn btn-primary"
          onClick={ onSend }
        />
      </form>
  );
};

ContactForm.propTypes = {
  contact: React.PropTypes.object.isRequired,
  onSend: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  sending: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ContactForm;
