import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Quercus Land Stewardship Services
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
