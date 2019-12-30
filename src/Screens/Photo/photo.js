import {Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width

const styles = {
    container: {
        flex: 1,
        paddingTop: 60,
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
    },
    photoview: {
        marginBottom: 20
    },
    photostext: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'blue',
    },
    imageview: {
        height: deviceWidth / 2, width: deviceWidth,
        backgroundColor: 'red',
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        shadowColor: '#222',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
    },
    image: {
        flex: 1, width: undefined, height: undefined
    },
    crossimageview: {
        alignItems: 'flex-end', padding: 15, backgroundColor: 'black'
    },
    crossimage: {
        width: 30, height: 30
    }
};

export default styles;