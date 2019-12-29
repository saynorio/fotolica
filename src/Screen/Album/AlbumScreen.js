import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class AlbumScreen extends Component {
    constructor(props) {
        super(props)
        console.log("This is the props...............", this.props.id);
        this.state = { userId: this.props.id, albumList: [] }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums?userId=' + this.state.userId)
            .then(response => response.json())
            .then(result => {
                this.setState({ albumList: result })
                console.log(result)
            })
    }

    goToPhotoScreen(id) {
        Actions.photoScreen({ albumId: id });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userview}>
                    <Text style={styles.albumtext}>
                        Albums
                    </Text>
                </View>
                <FlatList
                    data={this.state.albumList}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => { this.goToPhotoScreen(item.id) }}
                        >
                            <View style={styles.itemview}>
                                <Text style={styles.itemtext}>{item.title}
                                </Text>
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
    albumtext: {
        fontSize: 50,
        color: 'blue',
    },
    itemview: {
        padding: 10,
        height: 70,
        width: 350,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    itemtext: {
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default AlbumScreen;

