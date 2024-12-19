import React from 'react';
import { Text, View, Image } from 'react-native';

import imgXbox from "../../assets/images/historia/console-xbox.png";

import estilos from '../estilos/estilos';

export default function Historia() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>História do Xbox</Text>
      <Image source= { imgXbox } style={ estilos.img }/>
      <Text style={ estilos.paragrafo }>A Microsoft começou sua história com o público gamer em 2001, com o lançamento do Xbox. Lançado na época para concorrer com o PS2 da Sony e o Game Cube da Nintendo. O Xbox oferecia um hardware mais poderoso que o dos seus concorrentes.</Text>
      
      <Text style={ estilos.paragrafo }>E para mostrar a capacidade desse novo console super poderoso a Microsoft precisava de um jogo que usasse todo esse potencial, e foi aí que surgiu Halo, que fez um enorme sucesso atingindo uma imensa base de fãs, principalmente nos Estados Unidos.</Text>
    </View>
  );
}