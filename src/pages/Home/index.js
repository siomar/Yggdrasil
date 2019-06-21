import React, { Component } from "react";

import { connect } from "react-redux";

import { Div, Button, ButtonText, Input } from "./styles";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";

class Home extends Component {
  handleLogin = () => {
    // this.props.navigation.navigate("About");
    this.props.signUpRequest("siomar");
  };
  render() {
    return (
      <Div>
        <Input autoCapitalize="none" autoCorrect={false} placeholder="login" />
        <Button onPress={e => this.handleLogin()}>
          <ButtonText>Send</ButtonText>
        </Button>
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inicio: state.login
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
