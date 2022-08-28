import {CircularProgress} from '@mui/material';
import {getDownloadURL, listAll, ref} from 'firebase/storage';
import {useEffect, useState} from 'react';
import type {ReactImageGalleryItem} from 'react-image-gallery';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import storage from './firebase';

const imagesRef = ref(storage, 'image');

const AppImageGallery = () => {
  const [stateImages, setStateImages] = useState<ReactImageGalleryItem[]>([]);

  // StrictModeの影響で開発環境では2回表示処理が実行される
  // https://www.ey-office.com/blog_archive/2021/06/30/i-found-out-why-the-component-is-drawn-twice-in-the-react/
  // 空のuseSateで画面表示をしておいて、ダウンロードURLの取得が完了したら再表示を行う
  useEffect(() => {
    // 初期化済の時は取得処理をしない
    console.log('18');
    if (stateImages.length > 0) {
      console.log('20');
      return;
    }

    // 表示情報を取得
    listAll(imagesRef).then(res => {
      const itemSize = res.items.length;
      console.log('count:' + String(itemSize));

      // ダウンロードURLを取得
      const images: ReactImageGalleryItem[] = [];
      res.items.forEach(itemRef => {
        console.log(itemRef.fullPath);
        console.log('14');

        // https://firebase.google.com/docs/storage/web/download-files
        getDownloadURL(ref(storage, itemRef.fullPath)).then(url => {
          console.log(url);

          // 取得したダウンロードURLを貯める
          console.log('21');
          images.push({
            original: url,
            thumbnail: url,
          });
        }).catch(error => {
          console.log(error);
        }).finally(() => {
          // ダウンロードURLを全て取得したか確認
          console.log('count-download:' + String(images.length));
          console.log('42');
          if (itemSize === images.length) {
            // 値を設定して画面再表示
            console.log('44');
            setStateImages(images);
          }
        });
      });
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      console.log('46');
    });
    console.log('33');
  });

  // 表示情報取得前は待機のイメージを表示
  if (stateImages.length <= 0) {
    return <CircularProgress/>;
  }

  return (
    <ImageGallery items={stateImages}/>
  );
};

export default AppImageGallery;
