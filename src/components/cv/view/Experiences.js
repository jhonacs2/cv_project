import { Grid, Typography } from '@mui/material';
import React from 'react';

export const Experiences = ({ exp }) => {
  return (
    <Grid container>
      <Grid item sm={4}>
        <p>
          {exp.from} - {exp.to}
        </p>
      </Grid>
      <Grid item sm={8}>
        <Typography paragraph={true} mt={2} mb={0} style={{ fontWeight: 600 }}>
          {exp.position}
        </Typography>
        <Typography paragraph={true}>
          {exp.company}, {exp.city}
        </Typography>
      </Grid>
    </Grid>
  );
};
