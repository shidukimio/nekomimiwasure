import { CircularProgress, Stack } from '@mui/material';
import type { ReactImageGalleryItem } from 'react-image-gallery';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const AppImageGallery = ({
  stateImages,
}: {
  stateImages: ReactImageGalleryItem[];
}) => {
  // 表示情報取得前は待機のイメージを表示
  if (stateImages.length <= 0) {
    return (
      <Stack alignItems='center'>
        <CircularProgress />
      </Stack>
    );
  }

  return <ImageGallery items={stateImages} />;
};

export default AppImageGallery;
