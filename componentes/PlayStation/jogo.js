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
      <Text style= { estilos.titulo }>Final Fantasy VII</Text>
      <Text style={ estilos.paragrafo }>Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada.</Text>

      <Text style={ estilos.paragrafo }>
      Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir:</Text>
      <View style={ estilos.linhaCards }>
        <View>  
        <View style={[ estilos.card, estilos.cardPlaystation] }>
                <Image source={ imgSales } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>2 milh de cópias</Text>
                <Text style={ estilos.textoCard }>Em 2 dias no Japão</Text>
            </View>
            <View style={[ estilos.card, estilos.cardPlaystation] }>
                <Image source={ imgRanking } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>92% de Aprovação</Text>
                <Text style={ estilos.textoCard }>Metacritic</Text>
            </View>
        </View>
        <View>
            <View style={[ estilos.card, estilos.cardPlaystation] }>
                <Image source={ imgMoney } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>US$ 115 milhões</Text>
                <Text style={ estilos.textoCard }>Em 2 dias no Japão</Text>
            </View>
            <View style={[ estilos.card, estilos.cardPlaystation] }>
                <Image source={ imgDisc } style={ estilos.icone } />
                <Text style={ estilos.textoCard }>Remake em 2020</Text>
                <Text style={ estilos.textoCard }>Para o PS4</Text>
            </View>
        </View>
      </View>
    </View>
  );
}