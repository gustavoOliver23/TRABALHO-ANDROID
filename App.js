
//trabalho desenvolvido por gustavo oliveira magalhães e edison cesar

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TelaBoasVinda from './telas/TelaBoaVinda';
import TelaCadastro from './telas/TelaCadastro';
import TelaListagem from './telas/TelaListagem';
import TelaVisualizacao from './telas/TelaVisualizacao';
import TelaEdicao from './telas/TelaEdicao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="UserList"
      screenOptions={screenOptions}>
        <Stack.Screen name="TelaBoasVinda" component={TelaBoasVinda} options={{ headerShown: false }}/>
        <Stack.Screen name="Suas Senhas" component={TelaListagem} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{title:'Cadastro senha'}} />
        <Stack.Screen name="TelaVisualizacao" component={TelaVisualizacao} options={{ headerShown: false }} />
        <Stack.Screen name="TelaEdicao" component={TelaEdicao} options={{title:'Edite sua senha'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerStyle: {
      backgroundColor: "#375d80"
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
      fontWeight: 'bold'
  }
}
