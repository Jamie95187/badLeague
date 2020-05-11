import React from 'react';
import { NavLink } from 'react-router-dom';

const leagueLink = (props) => (
    <NavLink
      to={props.link}
      exact={props.exact}>{props.name}</NavLink>
);

export default leagueLink;
