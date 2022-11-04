import { AppBar } from './AppBar';
import { Container } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
