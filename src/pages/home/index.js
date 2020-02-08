import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <HomeView />
      </div>
    );
  }
}

export default Home;

const HomeView = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.title}>
        <Typography className={classes.text}>Soma</Typography>
        <Typography className={classes.text2}>pay</Typography>
      </div>

      <div className={classes.button}>
        <Button
          className={classes.menuButton}
          variant="contained"
          href="/funcionarios"
        >
          Ver teste de Mauricio Holanda
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  content: {
    marginTop: 200
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
  text: {
    fontSize: 80,
    color: "#5c2483",
    fontFamily: "cursive"
  },
  text2: {
    fontSize: 80,
    color: "#e84e0f",
    fontFamily: "cursive"
  },
  button: {
    marginTop: 100,
    display: "flex",
    justifyContent: "center"
  },
  menuButton: {
    fontSize: 20,
    fontFamily: "cursive"
  }
});
