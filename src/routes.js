import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignIn from "./pages/SignIn";
import Acess from "./pages/SignUp/pages/Acess";
import Details from "./pages/SignUp/pages/Details";
import Home from "./pages/Home";

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: SignIn,
      New: createSwitchNavigator(
        {
          AccessPage: Acess,
          DetailsPage: Details
        },
        { initialRouteName: "AccessPage" }
      ),
      Authenticated: createSwitchNavigator(
        {
          Home: Home
        },
        {
          initialRouteName: "Home"
        }
      )
    },
    {
      initialRouteName: "Login"
    }
  )
);
