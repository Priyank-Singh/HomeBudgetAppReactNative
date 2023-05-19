import { StyleSheet, Text, View, Image, TouchableOpacity,Button,ScrollView,TextInput,Alert } from 'react-native';
import {useState} from 'react'
import {Picker} from '@react-native-picker/picker'
import dateFormat,{masks} from 'dateformat';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import {PdfCode} from "../Component/PdfCode";
import * as React from 'react';


export default function CreateBill() {
    const [name,setName] = useState('');
    const [Address,setAddress] = useState('');
    const [Mobile_No,set_Mobile_No] = useState('');
    const [Product,set_Product] = useState('Car');
    const [PaymentType, set_PaymentType] = useState('Credit Card');
    const [Quantity,set_Quantity] = useState('');
    const now  = new Date();
    const [Invoice,set_Invoice] = useState(dateFormat(now,"ddmmyyhhMss"));
    const [Total,set_Total] = useState('');
    const [RemainingBalance, set_RemainingBalance] = useState('');
    const [ReceivedAmount, set_ReceivedAmount] = useState('');
    const [SelectedPrinter,set_SelectedPrinter ] = useState(); 
    const PrintToPdf = async () => {
        let html = PdfCode(name,Address,Mobile_No,Quantity,Invoice,Product,Total,ReceivedAmount,PaymentType,RemainingBalance);
        try {
            const {uri} = await Print.printToFileAsync({html});
            console.log("File saved to ",uri);
            await shareAsync(uri,{UTI: '.pdf', mimeType: 'application/pdf'});
            setName('');
            set_Invoice(dateFormat(now, "ddmmyyhhMss"));
            set_Total('');
            set_Quantity('');
            set_ReceivedAmount('');
            setAddress('');
            set_Mobile_No('');
        } catch (error) {
            Alert.alert("Somethong Goes Wrong");       
        }

    }


    return (
      <View style = {styles.container}>
       <ScrollView>
        <View style={styles.InputContainer}>
            <Text>Name</Text>
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              placeholder='Full Name'
              style={styles.textInput}
             />
        </View>

        <View style={styles.InputContainer}>
            <Text>Address</Text>
            <TextInput
              value={Address}
              onChangeText={text => setAddress(text)}
              placeholder='Address'
              style={styles.textInput}
             />
        </View>

        <View style={styles.InputContainer}>
            <Text>Mobile Number</Text>
            <TextInput
              value={Mobile_No}
              keyboardType='number-pad'
              onChangeText={text => set_Mobile_No(text)}
              placeholder='Mobile Number'
              style={styles.textInput}
             />
        </View>

        <View style = {styles.InputContainer}>
            <Text>Product</Text>
            <View style={styles.PickerContainer}>
             <Picker selectedValue={Product}
              style={styles.Picker}
              onValueChange={(item,index) => set_Product(item)}
             >
             <Picker.Item label='Sports' value="Sports"/>
             <Picker.Item label='Education' value="Education"/>
             <Picker.Item label='Entertainment' value="Entertainment"/>
             <Picker.Item label='Car EMI' value="Car EMI"/>
             <Picker.Item label='New Gadget' value="Gadget"/>
             <Picker.Item label='Clothes' value="Clothes"/>
             <Picker.Item label='Grocery' value="Grocery"/>
              <Picker.Item label='Rent' value="Rent"/>

             </Picker>
            
            </View>

         </View>
         <View style={styles.InputContainer}>
            <Text>Quantity</Text>
            <TextInput
              value={Quantity}
              onChangeText={text => set_Quantity(text)}
              placeholder='Quantity'
              style={styles.textInput}
             />
        </View>

        <View style={styles.InputContainer}>
            <Text>Total</Text>
            <TextInput
              value={Total}
              onChangeText={text => set_Total(text)}
              placeholder='Total'
              style={styles.textInput}
             />
        </View>

        <View style={styles.InputContainer}>
            <Text>Received Amount</Text>
            <TextInput
              value={ReceivedAmount}
              onChangeText={text => set_ReceivedAmount(text)}
              placeholder='Received Amount in Rupees'
              style={styles.textInput}
             />
        </View>

        <View style={styles.InputContainer}>
            <Text>Remaining Balance</Text>
            <TextInput
              value={RemainingBalance}
              onChangeText={text => set_RemainingBalance(text)}
              placeholder='Remaining Balance in Rupees'
              style={styles.textInput}
             />
        </View>

        <View style = {styles.InputContainer}>
            <Text>Payment Method</Text>
            <View style={styles.PickerContainer}>
             <Picker selectedValue={PaymentType} 
              style={styles.Picker}
              onValueChange={(item,index) => set_PaymentType(item)}
             >
             <Picker.Item label='Credit Card' value="Credit Card"/>
             <Picker.Item label='Debit Card' value="Debit Card"/>
             <Picker.Item label='UPI' value="UPI"/>
             <Picker.Item label='Cash' value="Cash"/>
             <Picker.Item label='Other' value="Other"/>
             
         

             </Picker>
            </View>
            <View style = {styles.CreateInvoiceButton} >
              <Button title="Create Invoice" onPress={PrintToPdf}/>
           </View>
         </View>

       </ScrollView>
      </View>
    );
  }

  const styles  =  StyleSheet.create({
    container : {
        flex:1,
        marginTop : 50,
        marginBottom:50,
        backgroundColor: "white", 
    },

    InputContainer:{
        marginTop:15,
        marginLeft:15,
        marginRight:15
    },

    textInput : {
        marginTop:4,
        height:40,
        borderColor:"#000",
        borderWidth:1,
        borderRadius:4,
        padding:4,
        marginBottom:6
    },
    PickerContainer:{
        marginTop:10,
        borderWidth:1,
        borderRadius:4,
        height:50

    },
    CreateInvoiceButton:{
        marginTop:10,
        marginBottom: 10
    }
    
  })