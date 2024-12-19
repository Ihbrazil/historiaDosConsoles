import React from 'react';
import { Text, View } from 'react-native';

import estilos from '../estilos/estilos';

export default function Conclusao() {
  return (
    <View style= { estilos.container }>
        <Text style={ estilos.titulo}>Conclusao</Text>
        <Text style={ estilos.paragrafo}>A Sony construiu com o PlayStation algo que para muita gente era impensável, não apenas por mostrar que era possível construir um produto barato e de qualidade, mas também por ter conseguido vencer uma das líderes de mercado na época de seu lançamento na briga pela fidelidade dos consumidores.</Text>
    </View>
  );
}