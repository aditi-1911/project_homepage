import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline}  from '@material-ui/core';
import Header from './components/Header';
import Login from './components/Login';
//import SignUp from './components/signup';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/homepage.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
});

export default function Hook() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <Login/>
  </div>
  );
}

