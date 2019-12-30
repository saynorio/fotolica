import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from "./splash";
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
        }
    }

    componentDidMount() {
        console.ignoredYellowBox = ['Remote debugger'];
        console.disableYellowBox = true;
        this.showProgressAndGoToNextScreen();
    }

    async showProgressAndGoToNextScreen() {
        await this.asyncAnimate(2000)
        Actions.homeScreen();
    }
  
    // Function to calculate animation progress
    asyncAnimate(wait) {
        let progress = 0;
        let promise = new Promise((resolve) => {
            setInterval(() => {
                progress += Math.random();
                if (progress > 1) {
                    progress = 1;
                    resolve(null)
                }
                this.setState({ progress });
            }, wait)
        })
        return promise
    }

    render() {
        return (
            <View style={styles.maincontainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Fotolica
                    </Text>
                </View>
                <Progress.Bar
                    style={styles.progress}
                    progress={this.state.progress}
                    color={'#2B65EC'}
                    borderRadius={1}
                    width={170}
                />
            </View>
        )
    }
}

const styles = Styles