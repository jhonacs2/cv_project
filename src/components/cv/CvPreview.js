import { Divider, Grid, Typography } from '@mui/material';

import React from 'react';

export const CvPreview = ({ personalInfo }) => {
  console.log(personalInfo);
  return (
    <Grid item container p={2} sm={12}>
      <Grid
        item
        sm={12}
        style={{ backgroundColor: '#1976d2', color: 'white' }}
        p={2}
      >
        <Typography variant='h3' component='div'>
          {personalInfo.name} {personalInfo.lastName}
        </Typography>
        <Typography variant='h5' component='div'>
          {personalInfo.title}
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
        <Typography variant='h6' fontWeight={600} fontSize={19}>
          Personal Details
        </Typography>
        <div>
          <Typography paragraph={true} fontWeight={'bold'} mb={0}>
            Address
          </Typography>
          <Typography paragraph={true} mb={0}>
            {personalInfo.address}
          </Typography>
        </div>
        <div>
          <Typography paragraph={true} fontWeight={'bold'} mb={0}>
            Phone Number
          </Typography>
          <Typography paragraph={true} mb={0}>
            {personalInfo.phone}
          </Typography>
        </div>
        <div>
          <Typography paragraph={true} fontWeight={'bold'} mb={0}>
            Email
          </Typography>
          <Typography paragraph={true}>{personalInfo.email}</Typography>
        </div>
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
      <Grid item sm={9} p={2}>
        <Typography variant='h5'>Education</Typography>
        <Divider></Divider>
        <Grid container>
          <Grid item sm={4}>
            <p>2008 - 2010</p>
          </Grid>
          <Grid item sm={8}>
            <Typography
              paragraph={true}
              mt={2}
              mb={0}
              style={{ fontWeight: 600 }}
            >
              Universisad del Valle, La Paz
            </Typography>
            <Typography paragraph={true} mb={0}>
              Degree: Master
            </Typography>
            <Typography paragraph={true}>Subject: Science</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
