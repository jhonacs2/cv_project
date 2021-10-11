import { Grid } from '@mui/material';
import React from 'react';
import { Education } from './Education';

import { Experience } from './Experience';
import { PersonaInfo } from './PersonaInfo';

export const CvCreator = ({
  setPersonalInfo,
  personalInfo,
  experience,
  setExperience,
  setEducation,
  education,
}) => {
  return (
    <Grid item container p={2}>
      <PersonaInfo
        setPersonalInfo={setPersonalInfo}
        personalInfo={personalInfo}
      />
      <Experience experience={experience} setExperience={setExperience} />
      <Education education={education} setEducation={setEducation} />
    </Grid>
  );
};
