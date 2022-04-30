import React, {useState} from 'react';
import {Text,
   View, 
   Image,
   StyleSheet,
   ImageBackground,
   Button
} from 'react-native';
import Caixas from './components/Caixas.js';
import Lp from './components/ListaPlana.js';
import Estilos from './styles/Estilos.js';

// componente de função
export default function App1() {
  
const imgbg1='./assets/img/bgwknd.jpg'
  //estados
const[ligado, setLigado] = useState(true)
  return (
    <View style= {Estilos.container}> 
   
      <ImageBackground
        source={require(imgbg1)}
        style={Estilos.imagemfundo}
      >
      
      <View style={Estilos.container}>
        <Button
          title={ligado?"DESLIGAR":"LIGAR"}
          onPress={()=>setLigado(!ligado)}
        />
        {ligado? 
        <Text> ligado </Text>
        :
        <Text> nao</Text>
        }

      </View>
      </ImageBackground>
    
    </View>


  );
};


const est = StyleSheet.create({

  logo:{
    width: 250,
    resizeMode: 'repeat'
  }
})

// export default class App1 extends Component{
//   render(){
//     return(
//       <View>
//         <View>
//         <Text> anna lauraaa </Text>
//         <Text> anna lauraaa </Text>
//       </View>

//       <View>
//         <Text> anna lauraaaaa </Text>
//         <Text> anna lauraaa </Text>
//       </View>
//       </View>
//     );
//   }

// }



