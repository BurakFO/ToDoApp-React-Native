import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import styles from './IndexText.style';

const IndexText = ({ onUpdateText }) => {

    const [inputText, setInputText] = useState('');

    const textChange = (text) => {
        setInputText(text);
        console.log('Text is changed',text);
    }; //her input degistiginde anlik olarak aliyo

    const handleSave = () => {
        console.log('input text is: ', inputText);
        onUpdateText(inputText); //??
    };  //save butonuna bastiktan sonra inputu aliyo.



    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Write something To Do'
                    placeholderTextColor="#808080" // Placeholder rengi
                    onChangeText={(text) => textChange(text)}
                    value={inputText}
                />
            </View>

            <TouchableOpacity style={styles.saveButtonContainer} onPress={handleSave}>

                <Text style={styles.saveButtonText}>Kaydet</Text>

            </TouchableOpacity>
        </View>
    );
};

export default IndexText;