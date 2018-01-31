// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class LetMeShowYou extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('LetMeShowYou', () => LetMeShowYou);


import {
    AppRegistry,
    Navigator, 
} from "react-native";
import myNavigator from "./app/components/myNavigator";

AppRegistry.registerComponent("LetMeShowYou", () => myNavigator);


//--------  T=YT Tutorial -----------
// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View, 
// } from "react-native";
// import Login from './app/login/Login'
// //import myNavigator from "./app/components/myNavigator";

// export default class LetMeShowYou extends Component{
//     render(){
//         return(
//             <NavigationExperimental.Navigator initialRoute = {{id: 'Login'}}
//             renderScene = {this.navigatorRenderScene}/>
//         );
//     }

//     navigatorRenderScene(route, navigator){
//         _navigator = navigator;
//         switch(route.id){
//             case 'Login':
//             return(<Login navigator = {navigator}/>);
//         }
//     }
// }


// AppRegistry.registerComponent('LetMeShowYou', () => LetMeShowYou);