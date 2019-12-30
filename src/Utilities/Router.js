import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SplashScreen from 'src/Screens/Splash/SplashScreen.js';
import HomeScreen from 'src/Screens/Home/HomeScreen.js';
import AlbumScreen from 'src/Screens/Album/AlbumScreen.js';
import PhotoScreen from 'src/Screens/Photo/PhotoScreen.js';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="splashScreen" component={SplashScreen} hideNavBar={true} panHandlers={null} initial />
                <Scene key="homeScreen" component={HomeScreen} hideNavBar={true} panHandlers={null} />  
                <Scene key="albumScreen" component={AlbumScreen} hideNavBar={true} panHandlers={null}/>
                <Scene key="photoScreen" component={PhotoScreen} hideNavBar={true} panHandlers={null}/>
            </Scene>
        </Router>
    );
}

export default RouterComponent;