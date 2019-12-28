import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

class PhotoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { albumId: this.props.albumId, photoList: [] }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + this.state.albumId)
            .then(response => response.json())
            .then(result => {
                this.setState({ photoList: result })
                console.log(result)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.photoList}
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

export default PhotoScreen;

