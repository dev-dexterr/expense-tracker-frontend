import React, { useEffect, useState } from 'react';

import Tabs from './navigation/tab';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

export default function App() {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Thin' : require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Bold' : require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Light' : require('./assets/fonts/Roboto-Light.ttf'),
      'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
      'Ubuntu-Light' : require('./assets/fonts/Ubuntu-Light.ttf'),
      'Ubuntu-Regular' : require('./assets/fonts/Ubuntu-Regular.ttf')
    });

    setFontLoaded(true);
  }

  useEffect(() => {
    loadFonts()
  }, [])

  return (
      <>
      {
        fontLoaded ? <NavigationContainer><Tabs /></NavigationContainer> : null
      }
      </>
  );
}
