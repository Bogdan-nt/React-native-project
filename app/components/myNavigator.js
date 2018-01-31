import { StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import CarDetails from "./CarDetails";
import Login from "../login/Login";
import Register from "../login/Register"
import Map from "./MapCarPosition";

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
  CarMap: {
    screen: Map,
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
  initialRouteName: "Login",
  headerMode: "screen",
}
);

export default myNavigator;
