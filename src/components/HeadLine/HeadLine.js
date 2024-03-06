import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Text,
} from 'react-native';

import styles from './HeadLine.style';

const Headline = ({ number }) => {

    return (

        <View style={styles.header} >
            <Text style={styles.toDo} >Yapılacaklar</Text>
            <Text style={styles.toDoNumber} > {number} </Text>
        </View>

    );
};


export default Headline;