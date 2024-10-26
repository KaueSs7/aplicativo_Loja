import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';

describe('SearchScreen', () => {
  it('deve renderizar a tela de busca corretamente', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <SearchScreen />
      </NavigationContainer>
    );

    // Verifica se o campo de busca está presente
    expect(getByPlaceholderText('Pesquisar produtos...')).toBeTruthy();
  });
});
