import React from 'react';
import { Text, View, Image } from 'react-native';

import imgDisc from "../../assets/images/jogo/disc.png";
import imgMoney from "../../assets/images/jogo/money.png";
import imgRanking from "../../assets/images/jogo/ranking.png";
import imgSales from "../../assets/images/jogo/sales.png";

import estilos from '../estilos/estilos';

export default function Especificacoes() {
  return (
    <View  style= { estilos.container }>
      <Text style= { estilos.titulo }>Super Mario bros</Text>
      <Text style={ estilos.paragrafo }>Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.</Text>
      
      <Text style={ estilos.paragrafo }>
      A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:</Text>
      <View style={ estilos.linhaCards }>
        <View>  
            <View style={[ estilos.card, estilos.cardNintendo] }>
                <Image source={ imgSales } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>40 milh de cópias</Text>
                <Text style={ estilos.textoCard }>Até 1994</Text>
            </View>
            <View style={[ estilos.card, estilos.cardNintendo] }>
                <Image source={ imgRanking } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>95% de Aprovação</Text>
                <Text style={ estilos.textoCard }>Revista CVG</Text>
            </View>
        </View>
        <View>
            <View style={[ estilos.card, estilos.cardNintendo] }>
                <Image source={ imgMoney } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>US$ 72 milhões</Text>
                <Text style={ estilos.textoCard }>Primeiros 4 meses</Text>
            </View>
            <View style={[ estilos.card, estilos.cardNintendo] }>
                <Image source={ imgDisc } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>Remake em 1993</Text>
                <Text style={ estilos.textoCard }>Para o SNES</Text>
            </View>
        </View>
      </View>
    </View>
  );
}