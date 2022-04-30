import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import Estilos from '../styles/Estilos.js';

const produtos=[
    {
        id:'001',
        desc:['Mouse', '25.00']
    },
    {
        id:'002',
        desc:['Teclado', '50.00']
    },
    {
        id:'003',
        desc:['Monitor', '430.00']
    },

]
export default function(){
    return (
        <View>
             <FlatList
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                
                    <View style={Estilos.item}>
                    
                     <Text style={Estilos.prod}>Descrição: {item.desc[0]} - Valor:{item.desc[1]}</Text>
                    
                    </View>
                }
           />  
           <Text> item eh {produtos[1].id}</Text>
        </View>
    )
}