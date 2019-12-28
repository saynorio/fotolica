import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Router from 'src/Utilities/Router';

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
