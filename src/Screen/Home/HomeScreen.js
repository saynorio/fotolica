import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
                                <Text style={styles.nametext}>
                                    {item.name}
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>
                                        city:
                                </Text>
                                    <Text style={styles.citytext}>
                                        {item.address.city}
                                    </Text>
                                    <Text style={{paddingLeft: 5}}>
                                        company:
                                </Text>
                                    <Text style={styles.citytext}>
                                        {item.company.name}
                                    </Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userview: {
    },
    usertext: {
        fontSize: 50,
        color: 'blue',
    },
    itemview: {
        padding: 10,
        height: 70,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'column'
    },
    nametext: {
        fontSize: 18,
        fontWeight: "bold",
    },
    citytext: {
        fontSize: 12,
        fontWeight: "bold",
    }
});

export default HomeScreen;

