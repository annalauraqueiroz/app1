import React from 'react';
import {Text, View} from 'react-native';
import Caixas from './components/Caixas.js';
import Estilos from './styles/Estilos.js';

function fexibir (vp1) {
  if(vp1){
    return(
      <Text> Curso de react </Text>
    )
  }else{
    return(
      <Text> - - - </Text>
    )
  }
}

// componente de função
export default function App1() {
  let vexibir = false;
  return (
    <View style= {Estilos.container}> 
      <Caixas exibir= {vexibir}/>
      <Text style={Estilos.txtPadrao}> fijhfuid</Text>     
      {vexibir?<Text> Curso de react </Text>:<Text> - - - </Text>}  
      {vexibir && <Text> Curso de react </Text>}  
    </View>


  );
};




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



