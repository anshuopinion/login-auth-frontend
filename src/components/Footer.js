import { Grid } from "@chakra-ui/layout";
import React from "react";

const Footer = () => {
  return (
    <Grid
      placeItems="center"
      fontSize="2xl"
      bg="orange.600"
      color="white"
      p="8"
    >
      2021 © copyright @dosomecoding
    </Grid>
  );
};

export default Footer;
