import css from '../styles.module.css';
import React, {Component} from 'react';
import Modal from '../Modal/Modal'
 class ImageGalleryItem extends Component{
    state ={
        onModal: false,
    }
    onModal =() =>{
        this.setState(({ onModal }) => ({ onModal: !onModal }));
    }
    render(){
        const { webformatURL, tags, largeImageURL} = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={this.onModal}
        />
      {this.state.onModal && <Modal  onClose={this.onModal} largeImageURL={largeImageURL} tag={tags}/>}
      </li>
    );
}
}
export default ImageGalleryItem;