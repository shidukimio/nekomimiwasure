import { AppBar, Box, createTheme, CssBaseline, Link, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="./nekomimiwasure">
        しづきみお
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    );
};

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

export const Home = () => {
  // https://github.com/mui/material-ui/blob/v5.10.2/docs/data/material/getting-started/templates/album/Album.tsx
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <HomeIcon sx={{ mr: 2 }}></HomeIcon>
                <Typography variant='h6' component='h1' color='inherit' noWrap>ねこみみの忘れもの</Typography>
            </Toolbar>
        </AppBar>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Copyright />
        </Box>
        {/* End footer */}
    </ThemeProvider>
  )
}
