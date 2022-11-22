import React from 'react';
import {Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Database from '../../servicos/Database';
import css from './css';
 
export default function AppItem(props){

    async function Editar(){ 
        const item = await Database.getItem(props.id);
        props.navigation.navigate("TelaEdicao", item);
    }
    async function butonVisu(){
        const item = await Database.getItem(props.id);
        props.navigation.navigate('TelaVisualizacao', item)
    }

    function Deletar(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                        Database.deleteItem(props.id)
                            .then(response => props.navigation.navigate("Suas Senhas", {id: props.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    }
    
    return (
    <View style={css.containerA}>
        <View style={css.viewimg}>
        <Image style={css.img} source={require('../../servicos/img/avatar.jpg')}/>
            <TouchableOpacity onPress={butonVisu}>
                <Text style={css.textItem}>{props.item}</Text>
            </TouchableOpacity> 
            
            </View>
        <View style={css.buttonsContainer} >
            <TouchableOpacity style={css.deleteButton} onPress={Deletar}> 
                <Text style={css.buttonText}><MaterialCommunityIcons name="trash-can-outline" color={'white'} size={20} /></Text> 
            </TouchableOpacity> 
            <TouchableOpacity 
                style={css.editButton} 
                onPress={Editar}> 
                < Text style={css.buttonText}><MaterialCommunityIcons name="pencil" color={'white'} size={20} /></Text> 
            </TouchableOpacity>
        </View>
    </View>
      );
}