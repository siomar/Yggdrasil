import React from "react";

import { Button, Text } from "react-native";

import { Div } from "./styles";

const About = ({ navigation }) => (
  <Div>
    <Text>About</Text>
    <Button onPress={e => navigation.navigate("Home")} title="Send to Home" />
  </Div>
);

export default About;
