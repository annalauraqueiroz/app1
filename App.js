import React from 'react';
import {Text, View} from 'react-native';
import Caixas from './components/Caixas';
import Estilos from './styles/Estilos.js';

// componente de função
export default function App1() {
  return (
    <View style= {Estilos.container}> 
      <Caixas/>
      <Text style={Estilos.txtPadrao}> fijhfuid</Text>       
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



