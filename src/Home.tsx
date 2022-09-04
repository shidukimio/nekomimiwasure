import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppImageGallery from './AppImageGallery';
import { Copyright } from './Copyright';
import storage from './firebase';
import type { ListResult, StorageReference } from 'firebase/storage';
import { getDownloadURL, getMetadata, listAll, ref } from 'firebase/storage';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { ReactImageGalleryItem } from 'react-image-gallery';

const listRef = ref(storage, 'public/images');

function setImages(
  res: ListResult,
  setStateImages: Dispatch<SetStateAction<ReactImageGalleryItem[]>>,
) {
  const itemSize = res.items.length;
  console.log('count:' + String(itemSize));

  // ダウンロードURLを取得
  const images: ReactImageGalleryItem[] = [];
  res.items.forEach((itemRef) => {
    console.log(itemRef.fullPath);
    console.log('14');
    const imageRef: StorageReference = ref(storage, itemRef.fullPath);

    // https://firebase.google.com/docs/storage/web/file-metadata?hl=ja
    getMetadata(imageRef)
      .then((metadata) => {
        console.log(metadata);

        // https://firebase.google.com/docs/storage/web/download-files
        getDownloadURL(imageRef)
          .then((url) => {
            console.log(url);

            // 取得したダウンロードURLを貯める
            console.log('21');
            images.push({
              original: url,
              thumbnail: process.env.PUBLIC_URL + '/thumbnail.svg',
              description: metadata.updated,
            });
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            // ダウンロードURLを全て取得したか確認
            console.log('count-download:' + String(images.length));
            console.log('42');
            if (itemSize === images.length) {
              // 並び替え
              images.sort(
                (
                  imageA: ReactImageGalleryItem,
                  imageB: ReactImageGalleryItem,
                ) => {
                  if (imageA.description === undefined) {
                    return 0;
                  }

                  if (imageB.description === undefined) {
                    return 0;
                  }

                  if (imageA.description < imageB.description) {
                    return 1;
                  }

                  if (imageB.description < imageA.description) {
                    return -1;
                  }

                  return 0;
                },
              );

              // 値を設定して画面再表示
              console.log('44');
              setStateImages(images);
            }
          });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('42:meta');
      });
  });
}

// https://mui.com/material-ui/customization/color/
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=FFEA00&primary.text.color=ECEFF1&secondary.text.color=3E2723
const theme = createTheme({
  palette: {
    primary: {
      light: '#757de8',
      main: '#3f51b5',
      dark: '#002984',
      contrastText: '#eceff1',
    },
    secondary: {
      light: '#ffff56',
      main: '#ffea00',
      dark: '#c7b800',
      contrastText: '#3e2723',
    },
  },
});

// https://github.com/mui/material-ui/blob/v5.10.2/docs/data/material/getting-started/templates/album/Album.tsx
export const Home = () => {
  const [stateImages, setStateImages] = useState<ReactImageGalleryItem[]>([]);

  // StrictModeの影響で開発環境では2回表示処理が実行される
  // https://www.ey-office.com/blog_archive/2021/06/30/i-found-out-why-the-component-is-drawn-twice-in-the-react/
  // 空のuseSateで画面表示をしておいて、ダウンロードURLの取得が完了したら再表示を行う
  useEffect(() => {
    // 初期化済の時は取得処理をしない
    console.log('18');
    if (0 < stateImages.length) {
      console.log('20');
      return;
    }

    // 表示情報を取得
    listAll(listRef)
      .then((res) => {
        setImages(res, setStateImages);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('46');
      });
    console.log('33');
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <HomeIcon sx={{ mr: 2 }} />
          <Typography noWrap variant='h6' component='h1' color='inherit'>
            ねこみみの忘れもの
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 1 }} maxWidth='lg'>
          <Grid container>
            <Grid item xs={12}>
              <AppImageGallery stateImages={stateImages} />
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 1 }} component='footer'>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};
