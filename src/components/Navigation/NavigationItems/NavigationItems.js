import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul classesName={classes.NavigationItems}>
    <NavigationItem link='/Start' exact>Home</NavigationItem>
    <NavigationItem link='/leagues'>Leagues</NavigationItem>
    <NavigationItem link='/clubs'>Clubs</NavigationItem>
    <NavigationItem link='/about'>About</NavigationItem>
  </ul>
);

export default navigationItems;
