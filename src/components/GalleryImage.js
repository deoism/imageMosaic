import React from 'react';     
// Component for gallery image
class GalleryImage extends React.Component {
    render() {
     return(
      <img 
            className={this.props.className } 
            src={this.props.src}  
            alt={this.props.alt}
            options={this.props.options}
          />
     )
    }
   }

   export default GalleryImage;