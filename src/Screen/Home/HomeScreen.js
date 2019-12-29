import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './home';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { usersList: [] }
    }

    componentDidMount() {
        console.log("I am inside componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {
                this.setState({ usersList: result })
                console.log(result)
            })
    }

    goToAlbumScreen(id) {
        Actions.albumScreen({ id: id })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userview}>
                    <Text style={styles.usertext}>
                        Users
                    </Text>
                </View>
                <FlatList
                    data={this.state.usersList}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.goToAlbumScreen(item.id)}
                        >
                            <View style={styles.itemview}>
                                <View style={styles.verticalview}>
                                    <Text style={styles.nametext}>
                                        {item.name}
                                    </Text>
                                    <View style={styles.horizontalview}>
                                        <View style={styles.citymainview}>
                                            <Text style={styles.citylabeltext}>
                                                city:
                                        </Text>
                                            <Text style={styles.citytext}>
                                                {item.address.city}
                                            </Text>
                                        </View>
                                        <View style={styles.companymainview}>
                                            <Text style={styles.companylabeltext}>
                                                company:
                                        </Text>
                                            <Text style={styles.companytext}>
                                                {item.company.name}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

export default HomeScreen;

