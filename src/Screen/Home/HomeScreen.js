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

    goToAlbumScreen(id){
        Actions.albumScreen({id: id})
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.usersList}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                        onPress={() => this.goToAlbumScreen(item.id)}
                        >
                            <Text style={styles.item}>{item.name}
                            </Text>
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

export default HomeScreen;

