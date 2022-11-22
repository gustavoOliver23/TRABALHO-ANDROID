import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Database from '../../servicos/Database';
import css from './css';


export default function TelaVisualizacao({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [titulo, setTitulo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
      if(!route.params) return;
      setTitulo(route.params.titulo);
      setUsuario(route.params.usuario);
      setSenha(route.params.senha);
      setDescricao(route.params.descricao);
    }, [route])

return (
  <SafeAreaView style={css.painel}>
          <View style={css.boxTitle}>
          
          <Text style={css.textTitle}>{titulo ? titulo : '--- não informado ---' }</Text>
          </View>
          <View style={css.boxText}>
          <Text style={css.texte}>Usuario:</Text>
          </View>
          <Text style={css.text}>{usuario ? usuario : '--- não informado ---' }</Text>
          <View style={css.boxText}>
          <Text style={css.texte}>Senha:</Text>
          </View>
          <Text style={css.text}>{senha ? senha : '--- não informado ---' }</Text>
          <View style={css.boxText}>
          <Text style={css.texte}>Descrição:</Text>
          </View>
          <Text style={css.text}>{descricao ? descricao : '--- não informado ---' }</Text>
          

          <View style={css.painelBotoes}>

              <TouchableOpacity style={css.button} onPress={() => {
                      navigation.goBack();
                  }}>
                  <Text style={css.buttonText}>Voltar <MaterialCommunityIcons name="arrow-left-top-bold" color={'white'} size={20} />
                  </Text>
              </TouchableOpacity>
              
          </View>

      </SafeAreaView>
);
}