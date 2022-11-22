import { StyleSheet } from "react-native"


const css = StyleSheet.create({
  
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
    width: 250,
    height: 50,
    backgroundColor: "#375d80",
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    
  },
  viewboton:{
    width: '100%',
    marginTop: 330,
    paddingHorizontal: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#2b2a2d',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollContainer: {
    flex: 1,
    width: '95%'
  },
  viewbut:{
    flex: 0.25,
    marginTop: 10,
  },
//appitens
  containerA: {
    
    marginTop: 5,
    width: '100%',
    
  },
  buttonsContainer: {
      flexDirection: 'row-reverse',
      alignItems: 'flex-end',
      borderBottomWidth: 2,
      borderBottomColor: '#375d80',
      paddingBottom: 10,
      marginTop: 0,
  },
  editButton: {
      marginLeft: 10,
      height: 40,
      backgroundColor: '#375d80',
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: '#ccc',
      alignItems: 'center'
  },
  deleteButton: {
      marginLeft: 10, 
      height: 40,
      width: 40,
      backgroundColor: '#375d80',
      borderRadius: 10,
      padding: 10,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: '#ccc',
      alignItems: 'center'
  },
  textItem: {
      fontSize: 20,
      alignItems: 'center',
      fontWeight: 'bold',
      paddingLeft: 15,
      paddingRight: 10,
      color: 'white'

  },
  img:{
    width:50,
    height:50,
    borderRadius: 50,
  },
  viewimg:{
      flexDirection: 'row',
      alignItems: 'flex-end',
  
  }
});

export default css
