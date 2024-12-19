import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Nintendo from "./componentes/Nintendo";
import PlayStation from './componentes/PlayStation';
import Xbox from './componentes/Xbox';

import iconNintendo from "./assets/icons/nintendo.png";
import iconPlayStation from "./assets/icons/ps.png";
import iconXbox from "./assets/icons/xbox.png";

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        
        <Abas.Screen
          name="Xbox"
          component={ Xbox }
          options={{
            tabBarIcon: () => (<Image source = {         iconXbox } />
            ),
          }}
        />

        <Abas.Screen
          name="PlayStation"
          component={ PlayStation }
          options={{
            tabBarIcon: () => (<Image source={ iconPlayStation } />
            ),
          }}
        />

        <Abas.Screen
          name="Nintendo"
          component={ Nintendo }
          options={{
            tabBarIcon: () => (<Image source={ iconXbox } />
            ),
          }}
        />        
        
      </Abas.Navigator>
    </NavigationContainer>
  );
}