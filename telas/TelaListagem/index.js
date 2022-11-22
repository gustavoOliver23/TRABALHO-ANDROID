import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Database from '../../servicos/Database';
import AppItem from './appItem';
import css from './css';

export default function TelaListagem({ route, navigation }) {
  
  const [items, setItems] = useState([]);
  
      useEffect(() => {
      Database.getItems().then(items => setItems(items));
      }, [route]);

    return (
      
      <SafeAreaView style={css.container}>
          <StatusBar style="light" />
        <ScrollView style={css.scrollContainer}>
          { items.map(item => {
          return <AppItem key={item.id} id={item.id} item={item.titulo} navigation={navigation} />
          })}
        </ScrollView>
         <View style={css.viewbut}>
          <TouchableOpacity style={css.butao} onPress={()=> navigation.navigate('TelaCadastro')}>
          <Text style={css.textButton}> nova senha <MaterialCommunityIcons name="file" color={'white'} size={20}/>
          </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}