import { Grid } from '@mui/material';
import React from 'react';
import { PersonaInfo } from './PersonaInfo';

export const CvCreator = ({ setPersonalInfo, personalInfo }) => {
  return (
    <Grid item container p={2}>
      <PersonaInfo
        setPersonalInfo={setPersonalInfo}
        personalInfo={personalInfo}
      />
    </Grid>
  );
};
