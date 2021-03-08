import React from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Button
} from '@material-ui/core';
import { AiOutlineMenu } from 'react-icons/ai';

import Calculator from '../components/organisms/Calculator';
import './Home.css';

const Home = () => (
  <div className="home">
    <AppBar className="header">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AiOutlineMenu />
        </IconButton>
        <Typography variant="h6">
          Leek
        </Typography>
      </Toolbar>
    </AppBar>
    <Calculator />
  </div>
);

export default Home;
