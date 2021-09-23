import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import { RestaurentsScreen } from "./Src/Screen/Restaurents.Screen";
export default function App() {
  return (
    <View style={styles.container}>
      <RestaurentsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight,
  },
});
