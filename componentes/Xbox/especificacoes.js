import React from 'react';
import { Text, View, Image } from 'react-native';

import imgCpu from "../../assets/images/especificacoes/cpu.png";
import imgGpu from "../../assets/images/especificacoes/gpu.png";
import imgHdd from "../../assets/images/especificacoes/hdd.png";
import imgRam from "../../assets/images/especificacoes/ram.png";

import estilos from '../estilos/estilos';

export default function Especificacoes() {
  return (
    <View  style= { estilos.container }>
      <Text style= { estilos.titulo }>Especificações Técnicas</Text>
      <Text style={ estilos.paragrafo }>Confira a seguir as especificações técnicas do Xbox de 2001</Text>
      <View style={ estilos.linhaCards }>
        <View>  
            <View style={[ estilos.card, estilos.cardXbox] }>
                <Image source={ imgCpu } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>Intel Pentium 3</Text>
                <Text style={ estilos.textoCard }>733 MHz</Text>
            </View>
            <View style={[ estilos.card, estilos.cardXbox] }>
                <Image source={ imgRam } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>64 MB DDR SDRAM</Text>
                <Text style={ estilos.textoCard }>200 MHz</Text>
            </View>
        </View>
        <View>
            <View style={[ estilos.card, estilos.cardXbox] }>
                <Image source={ imgGpu } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>nVidia NV2AV</Text>
                <Text style={ estilos.textoCard }>233 MHz</Text>
            </View>
            <View style={[ estilos.card, estilos.cardXbox] }>
                <Image source={ imgHdd } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>HD 8GB</Text>
                <Text style={ estilos.textoCard }>5400 RPM</Text>
            </View>
        </View>
      </View>
    </View>
  );
}