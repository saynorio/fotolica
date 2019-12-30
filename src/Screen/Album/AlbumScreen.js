import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './album';
import AlbumController from './AlbumController';
const albumController = new AlbumController();

class AlbumScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { userId: this.props.id, albumList: [] }
    }

    async showAlbumData() {
        try {
            let data = await albumController.fetchAlbumDataFromAPI(this.state.userId)
            this.setState({ albumList: data })
        } catch (err) {
            console.log("error", err)
            return;

        }
    }

    componentDidMount() {
        this.showAlbumData()
    }

    goToPhotoScreen(id) {
        Actions.photoScreen({ albumId: id });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.albumview}>
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

export default AlbumScreen;

