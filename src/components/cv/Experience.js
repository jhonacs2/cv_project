import { Button, Container, Grid } from '@mui/material';
import React from 'react';

import { NewExperience } from './NewExperience';

const numberRandom = () => {
  const myNumeroAleatorio = Math.floor(Math.random() * 10000001);
  return myNumeroAleatorio;
};

export const Experience = ({ experience, setExperience }) => {
  const handleInputExperience = () => {
    const newExperience = {
      id: numberRandom(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    };
    setExperience(experience.concat(newExperience));
  };

  const handleInforExperience = (id, data) => {
    console.log(data);
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
            handleInputExperience={handleInputExperience}
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
          Add
        </Button>
      </Grid>
    </Container>
  );
};
