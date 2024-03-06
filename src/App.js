import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';


import Components from './components';
const {
  HeadLine,
  ToDoCard,
  IndexText
} = Components;


const renderCards = ({ item }) => <ToDoCard item ={item} />




const App = () => {

  const [textInputValue, setTextInputValue] = useState('');
  const [textList, setTextList] = useState([]);

  const handleUpdateText = (text) => {
    setTextList(prevItems => [...prevItems, text])
    console.log('Main CALISTI input: ' + text);
  };
  // IndexText icerisindeki handleSave icersinde calisir . 
  // onUpdateText ise bu iki dosya arasinda bir kanal/kopru kurar.

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer} >
        <View style={styles.upperContent}>

          <HeadLine number={textList.length} />
          <FlatList
            data={textList}
            renderItem={renderCards}
            style={styles.cards}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <IndexText onUpdateText={handleUpdateText} />

        {/* 
        
        App.js dosyasında handleUpdateText adında bir fonksiyon tanımlıyoruz. Bu fonksiyon, "Main CALISTI" metnini konsola yazdırıyor.

        handleSave fonksiyonu, IndexText bileşenindeki "Kaydet" düğmesine basıldığında tetiklenir. Bu fonksiyon, önce inputText değerini konsola yazdırır ve ardından onUpdateText prop'una atanan fonksiyonu çağırır. Bu, App.js dosyasındaki handleUpdateText fonksiyonunu tetikler.

        IndexText bileşeninde, onUpdateText prop'una atanan fonksiyon, handleSave fonksiyonunun içinde çağrılarak çalışır. Bu, App.js dosyasındaki handleUpdateText fonksiyonunu tetikler ve "Main CALISTI" metnini konsola yazdırır.

      */}

      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#102027',

  },

  innerContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },

  cards: {
    height: Dimensions.get('window').height / 2,

  },

});


export default App;




