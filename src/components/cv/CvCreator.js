import { Grid } from '@mui/material';
import React from 'react';

import { Experience } from './Experience';
import { PersonaInfo } from './PersonaInfo';

export const CvCreator = ({
  setPersonalInfo,
  personalInfo,
  experience,
  setExperience,
}) => {
  return (
    <Grid item container p={2}>
      <PersonaInfo
        setPersonalInfo={setPersonalInfo}
        personalInfo={personalInfo}
      />
      <Experience experience={experience} setExperience={setExperience} />
    </Grid>
  );
};
