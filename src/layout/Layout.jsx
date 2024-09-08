import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
