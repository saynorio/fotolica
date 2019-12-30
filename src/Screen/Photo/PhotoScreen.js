import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableOpacity, Image, Modal, TouchableHighlight, StatusBar, BackHandler, Platform } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import styles from './photo';

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
                <View style={styles.photoview}>
                    <Text style={styles.photostext}>
                        Photos
                    </Text>
                </View>
                <FlatList
                    data={this.state.photoList}
                    renderItem={({ item }) =>

                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible, item.url);

                        }}
                            style={styles.imageview}
                        >
                            <Image
                                style={styles.image}
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

                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <View style={styles.crossimageview}>
                            <Image
                                style={styles.crossimage}
                                source={require('/home/abdul/fotolica/assets/cross3.jpg')}
                            >
                            </Image>
                        </View>
                    </TouchableOpacity>
                    <ImageViewer imageUrls={this.state.images} />
                </Modal>
            </View>
        );
    }
}


export default PhotoScreen;
