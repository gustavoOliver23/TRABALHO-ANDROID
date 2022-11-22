import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";


const css = StyleSheet.create({

  
  painel: {
    flex: 1,
    padding: 7,
    backgroundColor:'#2b2a2d',
    margintop: '100%',
    

    },
    input: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#9fa4a4',
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 16,
      alignItems: 'stretch',
      fontWeight: 'bold',
      
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 270,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
    },
    button: {
      marginTop: 10,
      height: 40,
      backgroundColor: '#375d80',
      borderRadius: 10,
      paddingHorizontal: 24,
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
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      
    }, 
});

export default css