import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Modal, TouchableHighlight, StatusBar } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

class PhotoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumId: this.props.albumId,
            photoList: [],
            modalVisible: false,
            images: [{
                url: '',
            }],
        }
        this.setModalVisible = this.setModalVisible.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + this.state.albumId)
            .then(response => response.json())
            .then(result => {
                this.setState({ photoList: result })
            })
    }

    setModalVisible(visible, imagePath) {
        this.state.images = [{
            url: imagePath,
        }]
        if (visible) {
            StatusBar.setHidden(true);
        }
        if (!visible) {
            StatusBar.setHidden(false);
        }
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.photoList}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible, item.url);
                        }}>
                            <Image
                                style={{ width: 300, height: 300 }}
                                source={{ uri: item.url }}
                            >
                            </Image>
                        </TouchableOpacity>

                    }
                    keyExtractor={(item, index) => index}
                />
                <Modal style={styles.modalImage}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <ImageViewer imageUrls={this.state.images} />
                </Modal>
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
    },
    image: {
        height: 300,
        width: 300
    },
    modalImage: {
        bottom: 0,
        marginBottom: 0,
        paddingBottom: 0,
        backgroundColor: '#000000',
    }

});

export default PhotoScreen;

