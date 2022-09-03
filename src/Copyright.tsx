import { Link, Typography } from '@mui/material';
import React from 'react';

export const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href={process.env.PUBLIC_URL}>
        しづきみお
      </Link>{' '}
      {new Date().getFullYear().toString() + '.'}
    </Typography>
  );
};
