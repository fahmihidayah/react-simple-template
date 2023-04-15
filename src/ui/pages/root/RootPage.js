import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const RootPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootPage;
