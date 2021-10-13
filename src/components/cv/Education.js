import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { numberRandom } from '../../utils/utils';
import { NewEducation } from './NewEducation';

export const Education = ({ education, setEducation }) => {
  const handleInputEducation = () => {
    const newEducation = {
      id: numberRandom(),
      universityname: '-',
      city: '-',
      degree: '-',
      subject: '-',
      from: '-',
      to: '-',
    };
    setEducation(education.concat(newEducation));
  };
  const handleInfoEducation = (id, data) => {
    setEducation(education.map((edu) => (edu.id === id ? data : edu)));
  };
  return (
    <Container>
      <Grid item xs={12}>
        <h2>Education</h2>
      </Grid>
      {education &&
        education.map((edu) => (
          <NewEducation
            key={edu.id}
            edu={edu}
            handleInfoEducation={handleInfoEducation}
          />
        ))}
      <Grid item xs={8} pt={2}>
        <Button
          fullWidth
          variant='contained'
          color='success'
          onClick={handleInputEducation}
        >
          Add New Education
        </Button>
      </Grid>
    </Container>
  );
};
