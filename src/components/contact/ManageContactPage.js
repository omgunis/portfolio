// import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as contactActions from '../../actions/contactActions';
// import ContactForm from './ContactForm';
// import toastr from 'toastr';
//
// export class ManageContactPage extends React.Component {
//   constructor(props, context){
//     super(props, context);
//   }
//
//   render(){
//     return (
//       <ContactForm
//         onSend={ this.saveContact }
//         onChange={ this.updateContactState }
//         contact={ this.state.contact }
//         errors={ this.state.errors }
//         sending={ this.state.sending}
//       />
//     );
//   }
// }
//
// ManageContactPage.propTypes = {
//   contact: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired
// };
//
// ManageContactPage.contextTypes = {
//   router: PropTypes.object
// };
//
// function mapStateToProps(state, ownProps){
//   return {
//     contact: contact
//   };
// }
//
// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(contactActions, dispatch)
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ManageContactPage);
