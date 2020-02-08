import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Button
            className={classes.menuButton}
            color="inherit"
            href="/extrato"
          >
            Extrato
          </Button>
          <Button className={classes.menuButton} color="inherit" href="/">
            Funcionários
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontFamily: "none"
  },
  title: {
    flexGrow: 1,
    fontSize: 30
  },
  appBar: {
    backgroundColor: "#e84e0f"
  }
}));
