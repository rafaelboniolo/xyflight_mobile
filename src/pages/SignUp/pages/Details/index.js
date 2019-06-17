import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  InputLib,
  Button,
  ButtonText,
  Header,
  Title,
  Form,
  CreateAccount,
  Link
} from "./styles";

const Details = ({ navigation }) => {
  /** State */
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [school, setSchool] = useState("");

  handleSignUp = () => {};

  handlePreviousPage = () => {
    navigation.navigate("AccessPage");
  };

  return (
    <Container>
      <Header>
        <Title>Conte-nos sobre você</Title>
      </Header>

      <Form>
        <InputLib
          placeholder="John Doe"
          textContentType="name"
          value={name}
          leftIcon={<Icon name="id-badge" size={24} color="white" />}
          onChangeText={text => setName(text)}
        />

        <InputLib
          placeholder="England"
          value={country}
          leftIcon={<Icon name="flag" size={24} color="white" />}
          textContentType="countryName"
          onChangeText={text => setCountry(text)}
        />

        <InputLib
          placeholder="Chamusca"
          value={city}
          leftIcon={<Icon name="building" size={24} color="white" />}
          textContentType="addressCity"
          onChangeText={text => setCity(text)}
        />

        <InputLib
          placeholder="Harvard School"
          value={school}
          leftIcon={<Icon name="university" size={24} color="white" />}
          onChangeText={text => setSchool(text)}
        />

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
