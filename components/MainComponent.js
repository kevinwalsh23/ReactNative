import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//create new component MenuNavigator which is a Stack Navigator component
const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail}
}, {
    //Navigation Options
    initialRouteName: 'Menu',
    navigationOptions: {
        //specify colors
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

class Main extends Component {
  
    render() {
   
      return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                <MenuNavigator />
            </View>
      );
    }
  }
    
  export default Main;