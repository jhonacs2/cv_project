import { Divider, Grid, Typography } from '@mui/material';

import React from 'react';
import { Educations } from './view/Educations';
import { Experiences } from './view/Experiences';

export const CvPreview = ({ personalInfo, experience, education }) => {
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
          {personalInfo.description}
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
        {experience.map((value) => (
          <Experiences key={value.id} exp={value} />
        ))}
      </Grid>

      <Grid item sm={9} p={2}>
        <Typography variant='h5'>Education</Typography>
        <Divider></Divider>
        {education.map((value) => (
          <Educations key={value.id} edu={value} />
        ))}
      </Grid>
    </Grid>
  );
};
