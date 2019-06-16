import React from "react";
import styled from "styled-components/native";

const View = styled.SafeAreaView`
  background: blue;
  height: 100%;
`;

const Text = styled.Text`
  color: white;
`;

const App = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
