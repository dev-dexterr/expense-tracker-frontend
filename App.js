import React, { useEffect, useState } from 'react';

import Tabs from './navigation/tab';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

export default function App() {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
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
