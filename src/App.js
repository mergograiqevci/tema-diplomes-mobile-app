import React from "react";
import Store from "./Store";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Redirect from "./Navigation/Redirect";
export default function App() {
  return (
    <Provider store={Store}>
      <View style={Styles.appContainer}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Redirect />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
