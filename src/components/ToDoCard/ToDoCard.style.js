import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export default StyleSheet.create({

    toDoCard:{
        backgroundColor:'#7da453',
        marginHorizontal:8,
        marginVertical:5,
        height: windowHeight/20.5,
        borderRadius:5,
        justifyContent:'center',
    },

    pressedToDoCard:{
        backgroundColor:'grey',
    },

    text:{
        fontSize:17,
        color:'white',
        padding:10,
    },

    pressedText:{
        textDecorationLine:'line-through',
    },

});