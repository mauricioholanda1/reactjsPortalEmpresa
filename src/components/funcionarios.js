import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
    padding: 10,
    margin: 20
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  content: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const Funcionarios = ({funcionarios}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        {funcionarios.map(funcionarios => (
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {funcionarios._id}
              </Typography>
              <Typography variant="h5" component="h2"></Typography>
              <Typography className={classes.pos}>
                {funcionarios.nome}
              </Typography>
              <Typography variant="body2" component="p">
                {funcionarios.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
export default Funcionarios;
