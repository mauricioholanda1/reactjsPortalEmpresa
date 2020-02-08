import React from "react";
import Routes from "./routes";
import {makeStyles} from "@material-ui/core/styles";
import "./App.css";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Routes />
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  content: {}
});
