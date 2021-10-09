import { AppBar, Toolbar, Typography } from '@mui/material';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import React from 'react';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  toolBar: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
});

export const HeaderAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.toolBar}>
      <AppBar position='static' className={classes.appbar}>
        <Toolbar>
          <Typography variant='h6' component='div' align='left' sx={{ p: 1 }}>
            CV-CREATOR
          </Typography>
          <DocumentScannerIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};
