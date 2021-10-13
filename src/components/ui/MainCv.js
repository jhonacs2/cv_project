import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import { CvCreator } from '../cv/CvCreator';
import { CvPreview } from '../cv/CvPreview';
import { HeaderAppBar } from './HeaderAppBar';

export const MainCv = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '-',
    lastName: '-',
    title: '-',
    address: '-',
    phone: '-',
    email: '-',
    description: '-',
  });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
          <HeaderAppBar />
        </Grid>
        <Grid item container justifyContent='center' spacing={1}>
          <Grid item xs={false} sm={false} md={1} />
          <Grid item xs={12} sm={12} md={5} mt={2}>
            <Paper>
              <CvCreator
                setPersonalInfo={setPersonalInfo}
                personalInfo={personalInfo}
                experience={experience}
                setExperience={setExperience}
                education={education}
                setEducation={setEducation}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={5} mt={2}>
            <Paper>
              <CvPreview
                personalInfo={personalInfo}
                experience={experience}
                education={education}
              />
            </Paper>
          </Grid>
          <Grid item xs={false} sm={false} md={1} />
        </Grid>
      </Grid>
    </div>
  );
};
