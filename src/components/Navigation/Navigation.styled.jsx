import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: red;
  }
`;
