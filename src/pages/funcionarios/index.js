import React, {Component} from "react";
import {connect} from "react-redux";
import actions from "../../redux/actions";
import Funcionarios from "../../components/funcionarios";
import Header from "../../components/header";

class FuncionariosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.chamadaAPi();
  }

  chamadaAPi = async () => {
    const {getLista} = this.props;
    await getLista();
  };

  render() {
    const {lista} = this.props;
    const funcionarios = lista.listaData.docs;

    return (
      <div>
        <Header title="Portal Empresa - Soma" />
        <Funcionarios funcionarios={funcionarios} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lista: state.lista
});

const mapDispatchToProps = dispatch => ({
  getLista: () => dispatch(actions.lista.get())
});

export default connect(mapStateToProps, mapDispatchToProps)(FuncionariosPage);
