import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

class AlbumScreen extends Component {
    constructor(props) {
        super(props)
        console.log("This is the props...............", this.props.id);
        this.state = {userId: this.props.id, albumList: []}
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums?userId=' + this.state.userId)
        .then(response => response.json())
        .then(result => {
            this.setState({ albumList: result })
            console.log(result)
        })
    }

    render() {
        return (
            <View style={styles.container}>
              <FlatList
                    data={this.state.albumList}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                        onPress={() => {}}
                        >
                            <Text style={styles.item}>{item.title}
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

export default AlbumScreen;

