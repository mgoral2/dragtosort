import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tile from './Tile.tsx';

const tiles = [
  {
    id: "google",
    uri: "https://google.com",
  },

  {
    id: "expo",
    uri: "https://expo.io",
  },
  {
    id: "facebook",
    uri: "https://facebook.com",
  },
  {
    id: "reanimated",
    uri: "https://docs.swmansion.com/react-native-reanimated/",
  },
  {
    id: "github",
    uri: "https://github.com",
  },
  {
    id: "rnnavigation",
    uri: "https://reactnavigation.org/",
  },
  {
    id: "youtube",
    uri: "https://youtube.com",
  },
  {
    id: "twitter",
    uri: "https://twitter.com",
  },
];



const App = () => {
  return (
    <Tile uri = {tiles[0].uri}/>
  )
}

export default App;

//git change
