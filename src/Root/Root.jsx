import React from "react";
import Home from "../components/Home/Home";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <NavBar></NavBar>
      {navigation.state === "loading" ? 'Loading data plz wait':<Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Root;
