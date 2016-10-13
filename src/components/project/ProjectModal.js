import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../actions/projectActions';
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';

export class ProjectModal extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      project: Object.assign({}, props.project),
      errors: {},
      showModal: false
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }

  render(){
    const popover = (
     <Popover id="modal-popover" title="popover">
       very popover. such engagement
     </Popover>
   );
   const tooltip = (
     <Tooltip id="modal-tooltip">
       wow.
     </Tooltip>
   );
   const { project } = this.state;
   return(
     <div>
       <Button
         bsStyle="primary"
         bsSize="large"
         onClick={this.open}
       >
         { project.title }
       </Button>

       <Modal show={this.state.showModal} onHide={this.close}>
         <Modal.Header closeButton>
           <Modal.Title>{ project.title }</Modal.Title>
           <h5>{ project.type }</h5>
         </Modal.Header>
         <Modal.Body>
           <h4>Objectives</h4>
           <p>{ project.objectives }</p>

           {/* <h4>Popover in a modal</h4> */}
           {/*}<p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p> */}

           {/* <h4>Tooltips in a modal</h4> */}
           {/* <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p> */}

           <hr />

           <h4>Description</h4>
           <p>{ project.description }</p>

           <h4>Tech</h4>
           <p>{ project.tech }</p>

           <p>Link to Site: <a href={ project.linkToSite } target="_blank">{ project.title }</a></p>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.close}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
  }
}

ProjectModal.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectModal;
