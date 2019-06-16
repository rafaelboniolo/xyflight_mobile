import React from "react";

import {
  Container,
  Label,
  Input,
  Button,
  ButtonText,
  Header,
  Title,
  Form,
  CreateAccount,
  Link
} from "./styles";

const Access = ({ navigation }) => {
  handleNextPage = () => {
    navigation.navigate("DetailsPage");
  };

  handleNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <Header>
        <Title>Informe seus dados de acesso</Title>
      </Header>

      <Form>
        <Label>E-mail</Label>
        <Input placeholder="john@doe.com" />

        <Label>Senha</Label>
        <Input placeholder="Sua senha secreta" last />

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
