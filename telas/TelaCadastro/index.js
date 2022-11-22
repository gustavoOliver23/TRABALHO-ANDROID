import { Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { React, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 


import Database from '../../servicos/Database';
import css from './css';



export default function TelaCadastro({ navigation }) {
    
    const [titulo, setTitulo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [descricao, setDescricao] = useState('');

    function TituloChange(titulo){ setTitulo(titulo); } 
    function UserChange(usuario){ setUsuario(usuario); }
    function PasswordChange(senha){ setSenha(senha); }
    function DescricaoChange(descricao){ setDescricao(descricao); } 
    
    async function handleButtonPress(){ 
        const listItem = {titulo, usuario, descricao, senha, null : parseInt(null)};
        Database.saveItem(listItem)
          .then(response => navigation.navigate("Suas Senhas", listItem));
      }
        
  return (
    <SafeAreaView style={css.painel}>

            <Text style={css.text}>Titulo</Text>
            <TextInput
                style={css.input}
                onChangeText={TituloChange}
                placeholder="Informe o titulo"
                value={titulo}
            />

            <Text style={css.text}>Usuario</Text>
            <TextInput
                style={css.input}
                onChangeText={UserChange}
                placeholder="Informe o usuario"
                value={usuario}
            />

            <Text style={css.text}>Senha</Text>
            <TextInput
                style={css.input}
                onChangeText={PasswordChange}
                value={senha}
                placeholder ="Informe a senha"
            />

            <Text style={css.text}>descrição</Text>
            <TextInput
                style={css.input}
                onChangeText={DescricaoChange}
                value={descricao}
                placeholder="Informe a descrição"
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

