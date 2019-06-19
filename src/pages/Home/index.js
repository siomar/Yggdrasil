import React from "react";

import { View, Text, Button } from "react-native";

import { connect } from "react-redux";

import { Div } from "./styles";

const Home = ({ navigation, inicio }) => (
  <Div>
    <Button onPress={e => navigation.navigate("About")} title="Send to About" />
  </Div>
);
const mapStateToProps = state => ({
  inicio: state
});

export default connect(mapStateToProps)(Home);
