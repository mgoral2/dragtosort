//ScrollingView.tsx

import React, { ReactElement } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const size = windowWidth / 2 - 8;

import Tile from './Tile';


interface ScrollingViewProps {
  children: ReactElement<{id: string, uri: string}>[];
}

const ScrollingView = ({children}: ListProps) => {
  return(
    <ScrollView
      contentContainerStyle = {{
        height: Math.ceil(children.length / 2) * size,
      }}
      showsVerticalScrollIndicator={false}
      bounces = {false}
      scrollEventThrottle={16}
    >
      <View style = {styles.ViewStyle}>
      {children.map((child) => {
        return (
          <Tile
            uri = {child.uri}
            id = {child.id}
          />
          );
  })}
      </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
  ViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default ScrollingView;
