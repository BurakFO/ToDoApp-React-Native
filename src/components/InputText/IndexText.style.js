import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    inputContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#37474f', // Arka plan rengi
        borderRadius: 10,
        padding: 5,
    },

    inputTextContainer: {
        marginTop: 5,
        padding:5,
        width: '95%',

    },

    inputText: {
        paddingBottom:8,
        borderBottomWidth: 1.5,
        borderColor: '#78909c',
        fontSize: 15,
        color:'white',

    },

    saveButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        height: windowHeight / 20.5,
        width: '90%',
        backgroundColor: '#ffa500',

    },

    saveButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300'
    },

});