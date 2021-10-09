import { Grid } from '@mui/material';
import React from 'react';
import { HeaderAppBar } from './components/ui/HeaderAppBar';

export const App = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <HeaderAppBar />
      </Grid>
    </Grid>
  );
};
