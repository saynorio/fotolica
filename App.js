import React, { Component } from 'react';
import { View } from 'react-native';
import Router from 'src/Utilities/Router';

// First component of the app
class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router />
            </View>
        );
    }
}

export default App;
