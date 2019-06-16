import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Container,
  Label,
  Input,
  Button,
  ButtonText,
  Header,
  Title,
  Logo,
  Form,
  CreateAccount,
  Link
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
    console.log(email, password);
    dispatch({ type: "session_REQUEST", payload: { email, password } });
  };

  return (
    <Container>
      <Header>
        <Title>
          XYFlight <Logo icon="plane" />
        </Title>
      </Header>

      <Form>
        <Label>E-mail</Label>
        <Input
          placeholder="john@doe.com"
          textContentType="username"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />

        <Label>Senha</Label>
        <Input
          placeholder="Sua senha secreta"
          textContentType="password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          last
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
