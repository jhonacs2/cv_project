import { Divider, Grid, Typography } from '@mui/material';

import React from 'react';

export const CvPreview = () => {
  return (
    <Grid item container p={2} sm={12}>
      <Grid
        item
        sm={12}
        style={{ backgroundColor: '#1976d2', color: 'white' }}
        p={2}
      >
        <Typography variant='h3' component='div'>
          Jhonatan Soto
        </Typography>
        <Typography variant='h5' component='div'>
          Senior Web Developer
        </Typography>
      </Grid>

      <Grid item sm={9} p={2}>
        <Typography variant='h5'>Description</Typography>
        <Divider></Divider>
        <Typography variant='p' component='div' align='justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum
          suscipit est. Vestibulum augue enim, pharetra a tempus ut, bibendum id
          leo. Aliquam vel ipsum scelerisque, commodo lectus in, ultrices erat.
          Aenean placerat pulvinar magna, a varius velit imperdiet ut. Phasellus
          semper mauris quis magna hendrerit lacinia. Nullam tincidunt ac justo
          efficitur auctor. Vestibulum ut sem scelerisque, varius mauris in,
          eleifend enim. Proin semper eleifend lectus at blandit. Vivamus quis
          dapibus nulla. Fusce non accumsan dolor. Vivamus dictum justo at lacus
          volutpat, a dignissim nulla commodo.
        </Typography>
      </Grid>
      <Grid item sm={3} p={2}>
        <h1>Hola Chi</h1>
      </Grid>
      <Grid item sm={9} p={2}>
        <Typography variant='h5'>Experience</Typography>
        <Divider></Divider>
        <Grid container>
          <Grid item sm={4}>
            <p>2015 - Present</p>
          </Grid>
          <Grid item sm={8}>
            <Typography
              paragraph={true}
              mt={2}
              mb={0}
              style={{ fontWeight: 600 }}
            >
              Senior Web Developer
            </Typography>
            <Typography paragraph={true}>Facebook Inc</Typography>
          </Grid>

          <Grid item sm={4}>
            <p>2015 - Present</p>
          </Grid>
          <Grid item sm={8}>
            <Typography
              paragraph={true}
              mt={2}
              mb={0}
              style={{ fontWeight: 600 }}
            >
              Senior Web Developer
            </Typography>
            <Typography paragraph={true}>Facebook Inc</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
