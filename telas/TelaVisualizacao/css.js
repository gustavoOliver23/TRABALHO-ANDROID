import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";


const css = StyleSheet.create({

  
  painel: {
    flex: 1,
    padding: 7,
    backgroundColor:'#2b2a2d',
    margintop: '100%',
    },
    painelBotoes: {
        flexDirection: 'row-reverse',
        width: '100%',
        marginTop: 270,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    button: {
      marginTop: 80,
      height: 50,
      backgroundColor: '#375d80',
      borderRadius: 15,
      paddingHorizontal: 40,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#375d80',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#353336',
      justifyContent: 'center',
      alignItems: 'center',

      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#9fa4a4',
    },
    boxTitle: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingVertical: 20,
      
      backgroundColor:'#375d80'
    },
    textTitle: {
      marginTop:25,
      color: "white",
      fontSize: 45,
      fontWeight: "bold",

    },
    texte:{
      fontSize: 20,
     
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxText: {
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#375d80',
    }  
});

export default css