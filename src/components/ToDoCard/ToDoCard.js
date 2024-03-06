import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Text,
} from 'react-native';

import IndexText from '../InputText/index';
import styles from './ToDoCard.style';

const ToDoCard = ({ item }) => {

    return (
        <View style={styles.toDoCard} >
            <Text style={styles.detail} >{item}</Text>
        </View>

    );
};

export default ToDoCard;