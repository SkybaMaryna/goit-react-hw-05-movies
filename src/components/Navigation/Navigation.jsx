import React from 'react';
import { StyledLink } from './Navigation.styled';

const Navigation = () => {
  const navMap = [
    { path: '/', title: 'Home' },
    { path: 'movies', title: 'Movies' },
  ];
  return (
    <ul>
      {navMap.map(({ path, title }) => (
        <StyledLink to={path} key={path}>
          {title}
        </StyledLink>
      ))}
    </ul>
  );
};

export default Navigation;
