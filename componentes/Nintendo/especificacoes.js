import React from 'react';
import { Text, View, Image } from 'react-native';

import imgCpu from "../../assets/images/especificacoes/cpu.png";
import imgGpu from "../../assets/images/especificacoes/gpu.png";
import imgHdd from "../../assets/images/especificacoes/hdd.png";
import imgRam from "../../assets/images/especificacoes/ram.png";

import estilos from '../estilos/estilos';

export default function Especificacoes() {
  return (
    <View style= { estilos.container }>
        <Text  style= { estilos.titulo }>Especificações Técnicas</Text>
        
        <Text style= { estilos.paragrafo }>Confira a seguir as especificações técnicas do NES, lançado em 1983</Text>

        <View style={ estilos.linhaCards }>
          <View>
            <View style={[ estilos.card, estilos.cardNintendo ]}>
                <Image source={ imgCpu} style={ estilos.icone } />
                <Text style={ estilos.textoCard }>Ricoh 2A03</Text>
                <Text style={ estilos.textoCard }>8-bit</Text>
            </View>
            <View style={[ estilos.card, estilos.cardNintendo ]}>
                <Image source={ imgRam } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>2KB RAM</Text>
                <Text style={ estilos.textoCard }>Memória</Text>
            </View>
          </View>
          
          <View>
            <View style={[ estilos.card, estilos.cardNintendo ]}>
                  <Image source={ imgGpu} style={ estilos.icone } />
                  <Text style={ estilos.textoCard }>52 Cores</Text>
                  <Text style={ estilos.textoCard }>256 x 240</Text>
              </View>
              <View style={[ estilos.card, estilos.cardNintendo ]}>
                  <Image source={ imgHdd} style={ estilos.icone } />
                  <Text style={ estilos.textoCard }>Cartucho</Text>
                  <Text style={ estilos.textoCard }>Proprietário</Text>
              </View>
            </View>
          </View>
    </View>
  );
}