import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';

import Components from './components';

const {
  HeadLine,
  ToDoCard,
  IndexText
} = Components;



const App = () => {

  const renderCards = ({ item }) =>
    <ToDoCard activeStatus={handleActiveStatus} item={item} textList={textList} cardList={cardList} />

  const [textList, setTextList] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [isGreen, setIsGreen ] = useState(true);

  const handleUpdateText = (text) => {
    const trimmedText = text.trim();

    if (trimmedText) {
      setTextList(prevItems => [...prevItems, text]);
      console.log('Main CALISTI input: ' + text);

    }
    else {
      alert('Bir deger giriniz');
    };
  };
  // IndexText icerisindeki handleSave icersinde calisir . 
  // onUpdateText ise bu iki dosya arasinda bir kanal/kopru kurar.
  // Tipki gonullerimizin kurdugu gibi...


  const handleActiveStatus = (number) => {

    console.log('SELAMMMM AHAHAHAHAH NASI DA CALISTI AMA ' + cardList.map(item => item.text + ' ' + item.isActive));
    //Textlisten olusturulan nesnelerin isActive olup olmadigini burda gorebiliyoruz. Fakat buherhangi bir card'a tiklandiginda gercdeklesitiroyr.
    //id almalı olmalı.

    cardList.map((text, index) => ({
      
    }));


    let headlineNumber = textList.length - number; //burayi duzenlemek lazim
    console.log('Number of the green Components is: ', number);
    return number;
  };

  useEffect(() => {
    const updateCardList = textList.map((text, index) => ({
      id: index + 1,
      text: text,
      isActive: isGreen,
    }));

    setCardList(updateCardList);

  }, [textList]);

  useEffect(() => {
    console.log('EN SONNTESTTTTTT USEFEEFECT CALISIYPRRR');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer} >
        <View style={styles.upperContent}>

          <HeadLine number={textList.length} />
          {/* textList uzunlugu yerine buraya active-inactive component yani card sayisi gelecek */}

          <FlatList
            data={textList}
            renderItem={renderCards}
            style={styles.cards}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View>
          <Text style={{ color: 'white', fontSize: 30 }}>{cardList.map(item => item.text + ' ' + item.isActive) + '  '}</Text>
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




