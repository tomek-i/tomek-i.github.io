import { Outlet } from "react-router-dom";
import { Heading } from "../components/Header/Header";

export const Layout = () => {
  return (
    <>
      <nav>
        <Heading />
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    */}
      </nav>

      <Outlet />
    </>
  );
};
