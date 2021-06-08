import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './Screens/writeScreen';
import ReadScreen from './Screens/readScreen'

export default class App extends React.Component{
  render() {
    return <AppContainer/>;

  }
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen: TransactionScreen},
  Write: {screen: SearchScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "Read"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const SwitchNavigator = createSwitchNavigator({
  ReadScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer =  createAppContainer(TabNavigator);