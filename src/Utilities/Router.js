import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SplashScreen from 'src/Screen/Splash/SplashScreen.js';
import HomeScreen from 'src/Screen/Home/HomeScreen.js';
import AlbumScreen from 'src/Screen/Album/AlbumScreen.js';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="splashScreen" component={SplashScreen} hideNavBar={true} panHandlers={null} />
                <Scene key="homeScreen" component={HomeScreen} hideNavBar={true} panHandlers={null} initial/>
                <Scene key="albumScreen" component={AlbumScreen} hideNavBar={true} panHandlers={null}/>
            </Scene>
        </Router>
    );
}

export default RouterComponent;