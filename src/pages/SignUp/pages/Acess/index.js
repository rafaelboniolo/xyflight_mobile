import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  Label,
  InputLib,
  Button,
  ButtonText,
  Header,
  Title,
  Form,
  CreateAccount,
  Link
} from "./styles";

const Access = ({ navigation }) => {
  /** State */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleNextPage = () => {
    // mostrar uma mensagem ;)
    if (!email.length || !password.length) return;

    navigation.navigate("DetailsPage");
  };

  handleNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <Header>
        <Title>Como você deseja entrar na plataforma?</Title>
      </Header>

      <Form>
        <InputLib
          placeholder="john@doe.com"
          textContentType="username"
          leftIcon={<Icon name="envelope" size={24} color="white" />}
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <InputLib
          placeholder="Sua senha secreta"
          last
          textContentType="password"
          leftIcon={<Icon name="lock" size={24} color="white" />}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button onPress={handleNextPage}>
          <ButtonText>Próximo</ButtonText>
        </Button>

        <CreateAccount onPress={handleNavigation}>
          <Link>Realizar login</Link>
        </CreateAccount>
      </Form>
    </Container>
  );
};

export default Access;
