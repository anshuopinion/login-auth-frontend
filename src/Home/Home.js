import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { actionTypes, useStateValue } from "../store";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import RecentPosts from "../components/RecentPosts/RecentPosts";
const Home = () => {
  const [, , removeCookie] = useCookies(["jwt"]);
  const [, dispatch] = useStateValue();
  const history = useHistory();
  const logout = () => {
    removeCookie("jwt");
    dispatch({ type: actionTypes.SET_TOKEN, value: null });
    history.push("/login");
  };

  return (
    <Box>
      {" "}
      <NavBar logout={logout} />
      <Hero />
      <RecentPosts />
      <Footer />
    </Box>
  );
};

export default Home;
