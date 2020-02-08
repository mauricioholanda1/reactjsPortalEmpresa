import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function ExtratoDebito({extratoDebito, calculoDebito}) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Tabela de Gastos
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.title}>Descrição</TableCell>
              <TableCell className={classes.title} align="right">
                Data
              </TableCell>
              <TableCell className={classes.title} align="right">
                Valor
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {extratoDebito.map(extratoDebito => (
              <TableRow key={extratoDebito.description}>
                <TableCell>{extratoDebito.description}</TableCell>
                <TableCell align="right">{extratoDebito.data}</TableCell>
                <TableCell align="right">
                  ${ccyFormat(extratoDebito.valor)}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell colSpan={1}>Total</TableCell>
              <TableCell align="right">${ccyFormat(calculoDebito)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const useStyles = makeStyles({
  content: {
    marginTop: 20
  },
  table: {
    minWidth: 200
  },
  title: {
    fontWeight: "bold"
  }
});
