//Tile.tsx

import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const size = windowWidth / 2 - 8





interface TileProps {
  id: string,
  uri: string,
  onLongPress: () => void;
}

const Tile = ({uri}: TileProps) => {
  return (
      <View style = {styles.container}>
        <WebView
          source = {{uri}}
          style = {styles.WVStyle}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    backgroundColor: 'black',
  },
  WVStyle: {
    flex: 1,
    margin: 8*2,
    borderRadius: 8
  },
});

export default Tile;
