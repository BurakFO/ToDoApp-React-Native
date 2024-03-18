import React, { useState, useEffect } from 'react';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from './ToDoCard.style';
import { act } from 'react-test-renderer';

const ToDoCard = ({ item, activeStatus, textList, cardList }) => {


    const [isPressed, setIsPressed] = useState(false);
    const [activeCounter, setActiveCounter] = useState(0);
    const [activeList, setActiveList] = useState([]);


    const doneFunction = () => {
        console.log(item, 'is done ');
        setIsPressed(!isPressed);
        //BURAYA setCardList'in ilgili iteminin isActive degerini Tam tersine cevirt. 
        //Sonrasinda ise yapilacaklar number'ini buna bagla yani APP'e bir cikti olarak dondur
    };

    useEffect(() => {
        console.log('isPressed Guncellendi: ', isPressed);
        // if (isPressed === false) {
        //     setActiveCounter(prevCount => prevCount + 1);
        // } else {
        //     setActiveCounter(prevCount => prevCount - 1);
        // };

        // console.log('ACTIVECOUNTER NUMBER IS: ', activeCounter);
        // let headlineNumber = textList.length - activeCounter;


        activeStatus();

    }, [isPressed]);
    // isPressed durumu degismedigi icin yani  "false-true-true-false"
    // durumu oldugunda art arda iki adet true olursa islemi gerceklestirmiyor,

    return (


        <View>

            {!isPressed ? (

                <TouchableOpacity
                    style={[styles.toDoCard, isPressed ? styles.pressedToDoCard : null]}
                    onPress={() => doneFunction(item)}
                >

                    <Text style={[styles.text, isPressed ? styles.pressedText : null]} >{item}</Text>
                </TouchableOpacity>
            )
                :
                (
                    <TouchableOpacity
                        style={[styles.toDoCard, isPressed ? styles.pressedToDoCard : null]}
                        onPress={doneFunction}
                    >

                        <Text style={[styles.text, isPressed ? styles.pressedText : null]} >{item}</Text>
                    </TouchableOpacity>
                )

            }







        </View>


        //         styles.pressedButton stilleri de eklenir. isPressed yanlış olduğunda (false olduğunda) ise null olarak bırakılır.

        //          ? işareti, bir koşullu ifadeyi ifade etmek için kullanılır. isPressed doğru ise styles.pressedButton uygulanır, aksi takdirde null olur.

        //          : işareti, koşullu bir ifade içindeki alternatif değerleri ayırmak için kullanılır. Burada, isPressed doğru ise styles.pressedButton uygulanır, aksi takdirde null olur.


        //Active-Inacive seklinde 2 adet cardd componenti olacak.
        //Active olanlar yesil olacak ve sayilacak
        //Inactive olanlar ise gri ve yazisi cizili olacak ve sayilmayacak.



    );
};

export default ToDoCard;