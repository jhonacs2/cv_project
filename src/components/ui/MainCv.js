import { Grid } from '@mui/material';
import React from 'react';
import { CvCreator } from '../cv/CvCreator';
import { HeaderAppBar } from './HeaderAppBar';

export const MainCv = () => {
  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
          <HeaderAppBar />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={1} />
          <Grid item sm={5}>
            <CvCreator />
          </Grid>
          <Grid item sm={5}>
            <h1>Hola Chi</h1>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
    </div>
  );
};