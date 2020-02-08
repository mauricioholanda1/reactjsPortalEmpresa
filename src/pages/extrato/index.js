import React, {Component} from "react";
import {connect} from "react-redux";
import actions from "../../redux/actions";
import Header from "../../components/header";
import ExtratoDebito from "../../components/extratoDebito";

class Extrato extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.chamadaAPi();
  }

  chamadaAPi = async () => {
    const {getExtrato} = this.props;
    await getExtrato();
  };

  totalDivida = extratoDebito => {
    return extratoDebito.map(({valor}) => valor).reduce((sum, i) => sum + i, 0);
  };

  render() {
    const {extrato} = this.props;
    console.log("extrato", extrato);
    const extratoDebito = extrato.extratoData.docs;
    const calculoDebito = this.totalDivida(extratoDebito);
    console.log("calculoDebito", calculoDebito);
    return (
      <div>
        <Header title="Portal Empresa - Soma" />
        <ExtratoDebito extratoDebito={(extratoDebito)} calculoDebito={(calculoDebito)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  extrato: state.extrato
});

const mapDispatchToProps = dispatch => ({
  getExtrato: () => dispatch(actions.extrato.get())
});

export default connect(mapStateToProps, mapDispatchToProps)(Extrato);
