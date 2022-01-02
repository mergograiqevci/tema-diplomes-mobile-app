import React from "react";
import Store from "./Store";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Redirect from "./Navigation/Redirect";
import ToasterUI from "./Components/ToasterUI";
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <Provider store={Store}>
      <View style={Styles.appContainer}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <Redirect />
        </NavigationContainer>
        <Toast config={toastConfig} />
      </View>
    </Provider>
  );
}

const toastConfig = {
  my_custom_type: ({ text1, props, ...rest }) => {
    return <ToasterUI props={props} />;
  },
};

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
