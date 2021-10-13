import { Grid, Typography } from '@mui/material';
import React from 'react';

export const Educations = ({ edu }) => {
  return (
    <Grid container>
      <Grid item sm={4}>
        <p>
          {edu.from} - {edu.to}
        </p>
      </Grid>
      <Grid item sm={8}>
        <Typography paragraph={true} mt={2} mb={0} style={{ fontWeight: 600 }}>
          {edu.universityname}, {edu.city}
        </Typography>
        <Typography paragraph={true} mb={0}>
          Degree: {edu.degree}
        </Typography>
        <Typography paragraph={true}>Subject: {edu.subject}</Typography>
      </Grid>
    </Grid>
  );
};
