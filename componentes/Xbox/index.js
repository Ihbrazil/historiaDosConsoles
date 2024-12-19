import React from 'react';
import { Text, ScrollView } from 'react-native';

import Historia from './historia';
import Especificacoes from './especificacoes';
import Jogo from './jogo';
import Conclusao from './conclusao';

export default function Xbox() {
  return (
    <ScrollView>
    
      <Historia />
      <Especificacoes />
      <Jogo />
      <Conclusao />

    </ScrollView>
  );
}