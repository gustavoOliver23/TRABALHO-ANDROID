import { StyleSheet } from "react-native"

const css = StyleSheet.create({
    boxTitle: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor:'#2b2a2d',
      margintop:'100%'
    },
    textTitle: {
      color: "#ffffff",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 50,
      
    },
    textButton: {
      fontSize: 25,
      color: "#ffffff",
      fontWeight: "bold",
      textShadowRadius: 20,
    },
    butao:{
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      width: 270,
      backgroundColor: "#375d80",
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 120,
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#375d80',
    },
    
    img:{
      width:250,
      height:250
    }
});

export default css