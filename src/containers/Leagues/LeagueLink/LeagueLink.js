import React from 'react';

const leagueLink = (props) => (
    <NavLink
      to={props.link}
      exact={props.exact}>{props.name}</NavLink>
);

export default leagueLink;
