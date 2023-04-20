import css from '../styles.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import { Component } from 'react';
class ImageGallery extends Component{
  render(){
    const {images} = this.props;
    return <ul className={css.ImageGallery} >
      {images && images.map(image =>(
        <ImageGalleryItem key={image.id} webformatURL={image.webformatURL} tags={image.tags} largeImageURL={image.largeImageURL}/>
      ))}
  </ul>
  }
}
export default ImageGallery;