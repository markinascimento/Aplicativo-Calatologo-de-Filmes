import React, {} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Filmes({ data }){

    function sinopse(){
        alert(data.sinopse)
    }

 return (
   <View style={styles.container}> 
       <Text style={styles.textFilme}> {data.nome} </Text>
       <Image 
        source={{uri: data.foto}}
        style={styles.img}
       />  
       <TouchableOpacity style={styles.button} onPress={sinopse}>
           <Icon style={{marginLeft: 27}} name={'info-circle'} color={'#fff'} size={25}/>
           <Text style={styles.textButon}> SAIBA MAIS </Text>
       </TouchableOpacity>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFilme:{
        fontSize: 25,
        color: '#fff',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    img:{
        width: 370,
        height: 200,
        marginBottom: 17,
        borderRadius: 10,
    },
    button:{
        marginBottom: 20,
        marginTop: -17,
        marginLeft: 300,
    },
    textButon:{
        color: '#fff',
        fontSize: 12
    }

});