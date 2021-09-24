import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./Src/Infrastructure/Theme";
import { RestaurentsScreen } from "./Src/Screen/Restaurents.Screen";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurentsScreen />
    </ThemeProvider>
  );
}
