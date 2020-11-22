/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import { Button, ThemeProvider } from "react-native-elements";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Welcome to Covid Tracker</Text>
          <Text>Record your vitals here for efficient tracking</Text>
          <Text>App is under construction</Text>
          <Button title="Dummy Button" />
        </View>
      </ScrollView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    fontSize: 18,
  },
  header: {
    color: "blue",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default App;
