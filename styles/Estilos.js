import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
}, 
    textoCursos:{
        color: '#00f',
        fontSize: 15
    },
    txtPadrao:{
        color: '#000',
        fontSize:20
    },
    txtTitulo:{
        color: '#000',
        fontSize: 30
    },
    item:{
        backgroundColor:'#008',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    prod:{
        fontSize: 15,
        color:'#fff'
    }
    ,
    imagemfundo:{
        flex:1,
        resizeMode: 'cover',
        width: '100%'
    }
});