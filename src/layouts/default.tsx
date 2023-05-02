import { Outlet } from 'react-router-dom';
import { Heading } from '../components/Header/Header';

export const Layout = () => {
  return (
    <>
      <nav>
        <Heading />
      </nav>

      <Outlet />
    </>
  );
};
