import React, {Component} from "react";
import {connect} from "react-redux";
import actions from "./redux/actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const {getLista} = this.props;
    getLista();
  }

  render() {
    const {lista} = this.props;
    console.log("lista", lista);

    return (
      <div className="container">
        <div className="content">
          <h1>React</h1>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
