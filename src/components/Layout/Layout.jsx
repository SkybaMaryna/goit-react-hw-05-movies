import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledMain } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Layout;
