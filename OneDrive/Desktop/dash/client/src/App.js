import "./App.css";
import React from "react";
import LineChart from "./components/lineChart";
import { AppBar, Typography, Container, Card } from "@material-ui/core";
import ll from "./components/images/ll.png";
import useStyles from "./appStyles";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={ll} alt="logo" height="60" />
        {/* <Typography className={classes.heading} variant="h2" align="center">
        Dashboard
      </Typography> */}
      </AppBar>
      <LineChart />
    </Container>
  );
};

export default App;
