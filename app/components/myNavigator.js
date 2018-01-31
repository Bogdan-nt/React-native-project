import { StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import CarDetails from "./CarDetails";
import Login from "../login/Login";
import Register from "../login/Register"

const myNavigator = StackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{},
  },
  Register:{
    screen:Register,
    navigationOptions:{},
  },
  Home: {
    screen: HomeScreen,
    navigationOptions:{
    },
  },
  Car: { 
    screen: CarDetails,
    navigationOptions:
    ({ navigation }) => ({
      title:navigation.state.params.name,
    })
  },
},
{
  initialRouteName: "Home",
  headerMode: "screen",
}
);

export default myNavigator;
