import React, { Component } from "react";

import { connect } from "react-redux";
import { Image } from "react-native";
import { Div, Button, ButtonText, Input, DivImg } from "./styles";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import Logo from "../../assets/icon.png";

class Home extends Component {
  handleLogin = () => {
    // this.props.navigation.navigate("About");
    this.props.signUpRequest("siomar");
  };
  render() {
    return (
      <Div>
        <DivImg>
          <Image style={{ width: 66, height: 58 }} source={Logo} />
        </DivImg>
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
