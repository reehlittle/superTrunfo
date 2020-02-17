import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    container: {
        height: 100
    },
    carousel: {
        flex: 1,
        backgroundColor: 'red'
    },
    tile: {
        flex: 1,
        width: Dimensions.get('window').width * 0.85,
        backgroundColor: 'yellow'
    },
      item: {
        backgroundColor: 'green',
      },
    //   imageContainer: {
    //     flex: 1,
    //     marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    //     backgroundColor: 'white',
    //     borderRadius: 8,
    //   },
    //   image: {
    //     ...StyleSheet.absoluteFillObject,
    //     resizeMode: 'cover',
    //   },
});