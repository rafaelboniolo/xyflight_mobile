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

const Details = ({ navigation }) => {
  handleSignUp = () => {};

  handlePreviousPage = () => {
    navigation.navigate("AccessPage");
  };

  return (
    <Container>
      <Header>
        <Title>Informe dados sobre você</Title>
      </Header>

      <Form>
        <Label>Nome</Label>
        <Input placeholder="John Doe" />

        <Label>País</Label>
        <Input placeholder="England" />

        <Label>Cidade</Label>
        <Input placeholder="Chamusca" />

        <Label>Instituição de Ensino</Label>
        <Input placeholder="Harvard School" last />

        <Button onPress={handleSignUp}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>

        <Button onPress={handlePreviousPage}>
          <ButtonText>Voltar</ButtonText>
        </Button>

        <CreateAccount onPress={handleNavigation}>
          <Link>Realizar login</Link>
        </CreateAccount>
      </Form>
    </Container>
  );
};

export default Details;
