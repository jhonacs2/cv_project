import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from '../../hooks/userForm';

export const CvCreator = () => {
  const [
    { name, lastName, title, address, phoneNumber, email },
    handleInputChange,
  ] = useForm({
    name: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  return (
    <Grid item container direction='column' p={2}>
      <h2>Personal Information</h2>

      <TextField
        id='standard-basic'
        label='Name'
        variant='standard'
        autoComplete='off'
        name='name'
        value={name}
        onChange={handleInputChange}
      />
      <TextField
        id='standard-basic'
        label='Last Name'
        variant='standard'
        autoComplete='off'
        name='lastName'
        value={lastName}
        onChange={handleInputChange}
      />
      <TextField
        id='standard-basic'
        label='Title'
        variant='standard'
        autoComplete='off'
        name='title'
        value={title}
        onChange={handleInputChange}
      />
      <TextField
        id='standard-basic'
        label='Address'
        variant='standard'
        autoComplete='off'
        name='address'
        value={address}
        onChange={handleInputChange}
      />
      <TextField
        id='standard-basic'
        label='Phone Number'
        variant='standard'
        autoComplete='off'
        name='phoneNumber'
        value={phoneNumber}
        onChange={handleInputChange}
      />
      <TextField
        id='standard-basic'
        label='Email'
        variant='standard'
        autoComplete='off'
        name='email'
        value={email}
        onChange={handleInputChange}
      />
    </Grid>
  );
};
