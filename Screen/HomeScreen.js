import { StyleSheet, Text, View, Image, TouchableOpacity,Button } from 'react-native';
import React from 'react'


export default function HomeScreen({navigation}) {
    return (
      <View style = {styles.container}>
        <Image 
        style={{
            width:400,
            height:400
        }}
        source={require('../assets/Money.jpeg')}/>
        <TouchableOpacity  
         onPress = { () => navigation.navigate('CreateBill')}
        style={styles.button}> 
            <Text>Create Bill</Text>
        </TouchableOpacity>

      </View>
    );
  }

  const styles  =  StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: "pink",
        alignItems: 'center',
        justifyContent: 'center'
    },

    button:{
        height:40,
        width:100,
        backgroundColor:"lightblue",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        elevation:10
    }
  })