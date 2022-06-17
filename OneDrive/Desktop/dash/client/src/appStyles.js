import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  main: {
    // border: "1px solid black",
    height: "80vh",
    width: "100%",
    margin: ".5em",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "space-around",
    // backgroundColor: "rgba(159, 136, 15, 0.26)",
  },
  graph: {
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    width: "90%",
  },
  details: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: "0.5em",
  },
  val: {
    width: "90%",
    marginBottom: "1em",
    display: "flex",
    justifyContent: "space-around",
  },
  appBar: {
    borderRadius: "5px",
    padding: "1em",
    marginBottom: "2em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "90%",
    width: "22%",
  },
  values: {
    width: "72%",
  },
  heading: {
    // color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
}));
