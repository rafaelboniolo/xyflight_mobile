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
  CreateAccount,
  Link
} from "./styles";

const SignIn = props => {
  handleNavigation = () => {
    props.navigation.navigate("New");
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
        <Input placeholder="john@doe.com" />

        <Label>Senha</Label>
        <Input placeholder="Sua senha secreta" last />

        <Button>
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
