import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  InputLib,
  Button,
  ButtonText,
  Form,
  CreateAccount,
  Link,
  Header,
  Title
} from "./styles";

const SignIn = props => {
  /** State */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /** Redux Dispatch Actions */
  const dispatch = useDispatch();

  handleNavigation = () => {
    props.navigation.navigate("New");
  };

  handleSignIn = () => {
    dispatch({ type: "session_REQUEST", payload: { email, password } });
  };

  return (
    <Container>
      <Header>
        <Title>XYFlight</Title>
      </Header>

      <Form>
        <InputLib
          placeholder="E-mail"
          leftIcon={<Icon name="envelope" size={24} color="white" />}
          textContentType="username"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />

        <InputLib
          placeholder="Senha secreta"
          leftIcon={<Icon name="lock" size={26} color="white" />}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          textContentType="password"
        />

        <Button onPress={handleSignIn}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <CreateAccount onPress={handleNavigation}>
          <Link>Não possuo conta</Link>
        </CreateAccount>
      </Form>
    </Container>
  );
};

export default SignIn;
