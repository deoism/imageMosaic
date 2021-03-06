import React from 'react'; 
import {Modal, Button, Image } from 'react-bootstrap'; 
 // Component for gallery modal
class GalleryModal extends React.Component {
    render() {
      
     if (this.props.isopen === "false") {
      return null;
     }  else {
     console.log(" this isopen " + this.props.isopen)
 return(  
      
  <Modal.Dialog isopen={this.props.isopen}  className={this.className}  >
    {this.showModal} 
  <Modal.Header>
    
  <Modal.Title>
      { this.props.name}
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>  
        <Image responsive
          src={this.props.src} 
          onClick={this.props.closemodal} 
          className={"img-responsive col-3  rounded "}        
          aria-labelledby="contained-modal-title" 
          alt={"this.props.src"}  
          /> 
      
    </Modal.Body>

    <Modal.Footer>
      <Button 
      onClick={this.props.closemodal} 
      data-dismis={"modal"} 
      type={'button'} 
      className={'btn btn-default'}
      isopen={this.props.isopen} 
      bsStyle="primary" 
      bsSize="large" 
      >Close</Button>
    
    </Modal.Footer>
  </Modal.Dialog> 
       
     )
   } }
   }
 
   export default GalleryModal;