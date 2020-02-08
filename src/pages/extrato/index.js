import React, {Component} from "react";
import {connect} from "react-redux";
// import actions from "../../redux/actions";
import Header from "../../components/header";

class Extrato extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.chamadaAPi();
  }

  chamadaAPi = async () => {
    // const {getLista} = this.props;
    // await getLista();
  };

  render() {

    return (
      <div>
        <Header title="Portal Empresa - Soma" />
      </div>
    );
  }
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => ({
  
// });

export default connect()(Extrato);
