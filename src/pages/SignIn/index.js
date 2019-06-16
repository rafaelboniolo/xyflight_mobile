import React from "react";

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
  CreateAccount
} from "./styles";

const SignIn = () => {
  return (
    <Container>
      <Header>
        <Title>
          XYFlight <Logo icon="plane" />
        </Title>
      </Header>

      <Form>
        <Label>E-mail</Label>
        <Input placeholder="john@doe.com" />

        <Label>Senha</Label>
        <Input placeholder="Sua senha secreta" />

        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <CreateAccount>Não possuo conta</CreateAccount>
      </Form>
    </Container>
  );
};

export default SignIn;
