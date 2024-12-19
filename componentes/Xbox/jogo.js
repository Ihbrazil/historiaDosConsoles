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
      <Text style= { estilos.titulo }>O fenômeno Halo</Text>
      <Text style={ estilos.paragrafo }>Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox.</Text>
      
      <Text style={ estilos.paragrafo }>Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.</Text>
      <View style={ estilos.linhaCards }>
        <View>  
            <View style={[ estilos.card, estilos.cardXbox] }>
                <Image source={ imgSales } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>4.7 milh de cópias</Text>
                <Text style={ estilos.textoCard }>Até Julho de 2006</Text>
            </View>
            <View style={[ estilos.card, estilos.cardXbox] }>
                <Image source={ imgRanking } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>97% de Aprovação</Text>
                <Text style={ estilos.textoCard }>Metacritic</Text>
            </View>
        </View>
        <View>
            <View style={[ estilos.card, estilos.cardXbox] }>
                <Image source={ imgMoney } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>US$ 170 milhões</Text>
                <Text style={ estilos.textoCard }>Apenas nos EUA</Text>
            </View>
            <View style={[ estilos.card, estilos.cardXbox] }>
                <Image source={ imgDisc } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>Remake em 2014</Text>
                <Text style={ estilos.textoCard }>Para o Xbox One</Text>
            </View>
        </View>
      </View>
    </View>
  );
}