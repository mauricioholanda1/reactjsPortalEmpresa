import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Funcionarios = ({funcionarios}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        {funcionarios.map(funcionarios => (
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.headerCard}>
                <Typography variant="h5" className={classes.title}>
                  Funcionário
                </Typography>
                <Typography variant="h6" className={classes.text}>
                  N° {funcionarios._id}
                </Typography>
              </div>
              <Divider />
              <div className={classes.body}>
                <Typography variant="h5" className={classes.text}>
                  {funcionarios.nome}
                </Typography>
                <Typography className={classes.text}>
                  {funcionarios.description}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
export default Funcionarios;

const useStyles = makeStyles({
  content: {
    paddingTop: 20,
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "10%",
    paddingRight: "10%",
    fontFamily: "monospace",
    justifyContent: "center"
  },
  root: {
    width: 300,
    padding: 10,
    margin: 20
  },
  text: {
    fontFamily: "monospace"
  },
  infoDiv: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12
  },
  title: {
    fontFamily: "inherit"
  },
  headerCard: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  body: {
    paddingTop: 10
  }
});
