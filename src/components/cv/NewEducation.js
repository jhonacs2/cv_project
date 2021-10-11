import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from '../../hooks/userForm';

export const NewEducation = ({ edu, handleInfoEducation }) => {
  const [
    { universityname, city, degree, subject, from, to },
    handleInputChange,
  ] = useForm({
    universityname: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  });
  const handleExperience = () => {
    const newData = {
      id: edu.id,
      universityname,
      city,
      degree,
      subject,
      from,
      to,
    };
    handleInfoEducation(edu.id, newData);
  };
  return (
    <>
      <Grid item xs={8} mt={1}>
        <TextField
          fullWidth
          id='standard-basic'
          label='University Name'
          variant='standard'
          autoComplete='off'
          name='universityname'
          value={universityname}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='City'
          variant='standard'
          autoComplete='off'
          name='city'
          value={city}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Degree'
          variant='standard'
          autoComplete='off'
          name='degree'
          value={degree}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Subject'
          variant='standard'
          autoComplete='off'
          name='subject'
          value={subject}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='From'
          variant='standard'
          autoComplete='off'
          name='from'
          value={from}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='To'
          variant='standard'
          autoComplete='off'
          name='to'
          value={to}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8} pt={2}>
        <Button
          fullWidth
          variant='contained'
          color='info'
          onClick={handleExperience}
        >
          Add Education
        </Button>
      </Grid>
    </>
  );
};
