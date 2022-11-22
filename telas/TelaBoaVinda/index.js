import React from 'react';
import { TouchableOpacity, Text, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';

import css from './css';


export default function TelaBoasVindas({navigation}) {
  return (
    <View style={css.boxTitle}>
      <Image style={css.img} source={require('../../servicos/img/cadeado.png')}/>
      <Text style={css.textTitle}>Gerencie suas Senhas!</Text>
      <StatusBar style="light" />
      <View >
      <TouchableOpacity style={css.butao} onPress={()=> navigation.navigate('Suas Senhas')}>
        <Text style={css.textButton}><MaterialCommunityIcons name="lock" color={'white'} size={20} /> Senhas
        </Text>
      </TouchableOpacity>
      
      </View>
    </View>

  );
}