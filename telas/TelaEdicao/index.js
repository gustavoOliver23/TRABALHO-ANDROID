import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 


import Database from '../../servicos/Database';
import css from './css';



export default function TelaEdicao({ route, navigation }) {
    const id = route.params ? route.params.id : undefined;
    const [titulo, setTitulo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [descricao, setDescricao] = useState('');

    function TituloChange(titulo){ setTitulo(titulo); } 
    function UserChange(usuario){ setUsuario(usuario); }
    function PasswordChange(senha){ setSenha(senha); }
    function DescricaoChange(descricao){ setDescricao(descricao); } 

    useEffect(() => {
        if(!route.params) return;
        setTitulo(route.params.titulo);
        setUsuario(route.params.usuario);
        setSenha(route.params.senha);
        setDescricao(route.params.descricao);
    }, [route])

 
        function TituloChange(titulo){ setTitulo(titulo); } 
        function UserChange(usuario){ setUsuario(usuario); }
        function PasswordChange(senha){ setSenha(senha); }
        function DescricaoChange(descricao){ setDescricao(descricao); } 
    
        async function handleButtonPress(){ 
        const listItem = {titulo, usuario, senha, descricao, null: parseInt(null)};
        Database.editItem(listItem, id)
        .then(response => navigation.navigate("Suas Senhas", listItem));
        }
        
  return (
    <SafeAreaView style={css.painel}>

            <Text style={css.text}>Titulo</Text>
            <TextInput
                style={css.input}
                onChangeText={TituloChange}
                placeholder="Informe o titulo"
                clearButtonMode="always"
                value={titulo}
            />

            <Text style={css.text}>Usuario</Text>
            <TextInput
                style={css.input}
                onChangeText={UserChange}
                placeholder="Informe o usuario"
                clearButtonMode="always"
                value={usuario}
            />

            <Text style={css.text}>Senha</Text>
            <TextInput
                style={css.input}
                onChangeText={PasswordChange}
                clearButtonMode="always"
                placeholder="Informe a senha"
                value={senha}
            />

            <Text style={css.text}>descrição</Text>
            <TextInput
                style={css.input}
                onChangeText={DescricaoChange}
                clearButtonMode="always"
                placeholder="Informe a descrição"
                value={descricao}
            />

            <View style={css.painelBotoes}>
                <TouchableOpacity style={css.button}
                    onPress={handleButtonPress}>
                    <Text style={css.buttonText}> <MaterialCommunityIcons name="content-save-outline" color={'white'} size={20}/> SALVAR</Text>
                  </TouchableOpacity>

                <TouchableOpacity style={css.button} onPress={() => {
                        navigation.goBack();
                    }}>
                    <Text style={css.buttonText}>CANCELAR <MaterialCommunityIcons name="cancel" color={'white'} size={20} />
                    </Text>
                </TouchableOpacity>
                
            </View>

        </SafeAreaView>
  );
}