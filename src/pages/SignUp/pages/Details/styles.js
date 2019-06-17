import styled from "styled-components/native";
import { colors } from "../../../../styles";
import { Input } from "react-native-elements";

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: flex-start;

  height: 100%;
  background: ${colors.primary};
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 24px;

  margin-right: 6px;
  color: #fff;
`;
export const Form = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  margin-bottom: 4px;
`;

export const InputLib = styled(Input).attrs({
  placeholderTextColor: colors.secondarylighter,
  autoCorrect: false,
  autoCompleteType: "off",
  autoCapitalize: "none",
  inputStyle: {
    color: "#FFF"
  },
  containerStyle: {
    marginBottom: 30,
    width: 300
  },
  leftIconContainerStyle: {
    marginRight: 10
  }
})`
  color: #fff;
`;

// export const Input = styled.TextInput.attrs(() => ({
//   placeholderTextColor: colors.secondarylighter,
//   autoCorrect: false,
//   autoCompleteType: "off",
//   autoCapitalize: "none"
// }))`
//   height: 35px;
//   padding: 10px;
//   width: 200px;
//   border: 1px solid ${colors.secondarylighter};
//   border-radius: 6px;
//   margin-bottom: ${props => (props.last ? "40px" : "20px")};
//   color: #fff;
// `;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #cecaca;
  border-radius: 8px;
  height: 40px;
  width: 200px;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
`;

export const CreateAccount = styled.TouchableOpacity``;

export const Link = styled.Text`
  color: ${colors.secondarylighter};
  font-size: 12px;
`;
