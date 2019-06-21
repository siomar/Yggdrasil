import styled from "styled-components/native";

export const Div = styled.View`
  flex: 1;
  align-items: stretch;
  padding: 30px;
  justify-content: center;
  background: #ee9ca7;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  background: #333;
  height: 52px;
  border-radius: 4px;
  color: #fff;
  padding: 0 20px;
  font-size: 16px;
  margin-top: 10px;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ee9ca7;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;
