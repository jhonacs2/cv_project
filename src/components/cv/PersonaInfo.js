import { Grid, TextField, Container } from '@mui/material';
import React from 'react';
import { useForm } from '../../hooks/userForm';

export const PersonaInfo = ({ setPersonalInfo, personalInfo }) => {
  const [
    { name, lastName, title, address, phoneNumber, email },
    handleInputChange,
  ] = useForm({
    name: '',
    lastName: '',
    title: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleInputInfor = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container onChange={handleInputInfor}>
      <Grid item xs={12}>
        <h2>Personal Information</h2>
      </Grid>

      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Name'
          variant='standard'
          autoComplete='off'
          name='name'
          value={name}
          onChange={handleInputChange}
          size='small'
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Last Name'
          variant='standard'
          autoComplete='off'
          name='lastName'
          value={lastName}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Title'
          variant='standard'
          autoComplete='off'
          name='title'
          value={title}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Address'
          variant='standard'
          autoComplete='off'
          name='address'
          value={address}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Phone Number'
          variant='standard'
          autoComplete='off'
          name='phone'
          value={phoneNumber}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Email'
          variant='standard'
          autoComplete='off'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
      </Grid>
    </Container>
  );
};
