import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from '../../hooks/userForm';

export const NewExperience = ({ exp, handleInforExperience }) => {
  const [{ position, company, city, from, to }, handleInputChange] = useForm({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  });
  const handle = () => {
    const newData = {
      id: exp.id,
      position,
      company,
      city,
      from,
      to,
    };
    handleInforExperience(exp.id, newData);
  };

  return (
    <>
      <Grid item xs={8} mt={1}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Position'
          variant='standard'
          autoComplete='off'
          name='position'
          value={position}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Company'
          variant='standard'
          autoComplete='off'
          name='company'
          value={company}
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
        <Button fullWidth variant='contained' color='info' onClick={handle}>
          Add Experience
        </Button>
      </Grid>
    </>
  );
};
