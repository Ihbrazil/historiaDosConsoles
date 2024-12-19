import React from 'react';
import { Text, View, Image } from 'react-native';

import imgCpu from "../../assets/images/especificacoes/cpu.png";
import imgGpu from "../../assets/images/especificacoes/gpu.png";
import imgHdd from "../../assets/images/especificacoes/hdd.png";
import imgRam from "../../assets/images/especificacoes/ram.png";

import estilos from '../estilos/estilos';

export default function Especificacoes() {
  return (
    <View style= {estilos.container }>
      <Text style={ estilos.titulo }>Especificações Técnicas</Text>
      <Text style={ estilos.paragrafo }>Confira a seguir as especificações técnicas do PlayStation, lançado em 1994</Text>
      <View style= { estilos.linhaCards }>
        <View>
            <View style={[ estilos.card, estilos.cardPlaystation ]}>
                <Image source={ imgCpu } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>Sony CXD8530BQ</Text>
                <Text style={ estilos.textoCard }>33.8688 MHz</Text>
            </View>
            <View style={[ estilos.card, estilos.cardPlaystation ]}>
                <Image source={ imgRam } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>2 MB EDO DRAM</Text>
                <Text style={ estilos.textoCard }>33 MHz</Text>
            </View>
        </View>
        <View>
            <View style={[ estilos.card, estilos.cardPlaystation ]}>
                <Image source={ imgGpu } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>Sony CXD8514Q</Text>
                <Text style={ estilos.textoCard }>33 MHz</Text>
            </View>
            <View style={[ estilos.card, estilos.cardPlaystation ]}>
                <Image source={ imgHdd } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>Drive de CD-ROM</Text>
                <Text style={ estilos.textoCard }>660 MB / disco</Text>
            </View>
            
        </View>
      </View>
    </View>
  );
}