import { CircularProgress, Stack } from '@mui/material';
import { lazy } from 'react';
import { Suspense } from 'react';
import type { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ReactImageGallery = lazy(async () => {
  return import('react-image-gallery');
});

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
      {/*
      https://tech-memo.yonayona.biz/posts/react-image-gallery

      lazyLoad:遅延ロード
      showThumbnails:サムネイル表示
      showBullets:イメージに対応するボタンを表示
       */}
      <ReactImageGallery
        lazyLoad
        showBullets
        showThumbnails={false}
        items={stateImages}
      />
    </Suspense>
  );
};

export default AppImageGallery;
