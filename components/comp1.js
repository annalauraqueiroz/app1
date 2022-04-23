import React from 'react';
import {Text, View} from 'react-native';
import Estilos from '../styles/Estilos.js';

let cor;

export default function (props){//pode deixar sem nome, o código fica mais limpo pois ja ta exportando ela
    cor = props.cor;
    return(
        <Text  style= {Estilos.textoCursos}>CFB Cursos - Curso de {props.curso} </Text>
    )
}

