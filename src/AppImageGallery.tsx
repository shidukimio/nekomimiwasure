import type {ReactImageGalleryItem} from 'react-image-gallery';
import ImageGallery from 'react-image-gallery';

const images: ReactImageGalleryItem[] = [];

const AppImageGallery = () => (
  <ImageGallery items={images}/>
);

export default AppImageGallery;
