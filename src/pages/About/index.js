import React from "react";

import { Button, Text } from "react-native";
import { connect } from "react-redux";
import { Div } from "./styles";

const About = ({ navigation, dados }) => (
  <Div>
    <Text>{dados.login}</Text>
    <Button onPress={e => navigation.navigate("Home")} title="Send to Home" />
  </Div>
);

const mapStateToProps = state => {
  return {
    dados: state.login.data
  };
};

export default connect(mapStateToProps)(About);
