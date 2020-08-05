 import React, { useState , useEffect } from 'react';
 import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   FlatList,
   ActivityIndicator,
   ImageBackground
 } from 'react-native';
import api from './src/Service/api';
import Filmes from './src/Filmes/index';
 
 export default function myApp(){

  const [ filmes , setFilmes ] = useState('');
  const [ loading , setLoading] = useState(true);
   useEffect(()=>{
    async function mostrarCatalogo(){
      const response = await api.get('/r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    } 
    mostrarCatalogo();
  },[]);

    if(loading){
      return(
        <ImageBackground 
          source = { require('./src/assets/background.jpg') }
          style={{flex: 1}}
        >
          <View style={styles.container}>
            <ActivityIndicator size={60} color={'#fff'}/>
          </View>
        </ImageBackground>
       
      );
    }else{
      return(
        <View>
          <FlatList 
           data = {filmes}
           keyExtractor = {item => item.id.toString()}
           renderItem = {({item}) => (<Filmes data={item}/>)}
          />
        </View>
      );
    }

   
 }
 
 const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      marginTop: 150
    },
    texto:{
      fontSize: 50,
      fontWeight: '500',
      color: 'red'
    }
 });