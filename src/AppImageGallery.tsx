import { CircularProgress, Stack } from '@mui/material';
import React from 'react';
import { Suspense } from 'react';
import type { ReactImageGalleryItem } from 'react-image-gallery';
import ReactImageGallery from 'react-image-gallery';
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

  return (
    <Suspense
      fallback={
        <Stack alignItems='center'>
          <CircularProgress />
        </Stack>
      }
    >
      <ReactImageGallery lazyLoad items={stateImages} />)
    </Suspense>
  );
};

export default AppImageGallery;
