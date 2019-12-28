import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SplashScreen extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.ignoredYellowBox = ['Remote debugger'];
        console.disableYellowBox = true;
    }

    gotoHomeScreen(){
        Actions.homeScreen();
    }

    render(){
    return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={() => this.gotoHomeScreen()}
        >
      <Text>Welcome to fotolica</Text>
      </TouchableOpacity>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;