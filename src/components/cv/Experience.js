import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { numberRandom } from '../../utils/utils';

import { NewExperience } from './NewExperience';

export const Experience = ({ experience, setExperience }) => {
  const handleInputExperience = () => {
    const newExperience = {
      id: numberRandom(),
      position: '-',
      company: '-',
      city: '-',
      from: '-',
      to: '-',
    };
    setExperience(experience.concat(newExperience));
  };

  const handleInforExperience = (id, data) => {
    setExperience(experience.map((exp) => (exp.id === id ? data : exp)));
  };

  return (
    <Container>
      <Grid item xs={12}>
        <h2>Experience</h2>
      </Grid>
      {experience &&
        experience.map((exp) => (
          <NewExperience
            key={exp.id}
            exp={exp}
            handleInforExperience={handleInforExperience}
          />
        ))}
      <Grid item xs={8} pt={2}>
        <Button
          fullWidth
          variant='contained'
          color='success'
          onClick={handleInputExperience}
        >
          Add New Experience
        </Button>
      </Grid>
    </Container>
  );
};
