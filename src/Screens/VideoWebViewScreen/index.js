import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import Header from "~/Components/Header";
import { useNavigation } from "@react-navigation/native";
import Colors from "~/Assets/Colors";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import { StatusBar } from "react-native";
const VideoWebViewScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Header
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        safeAreaBackgroundColor={Colors.youtubeBackground}
        backgroundColor={Colors.youtubeBackground}
        height={50}
      />
      <WebView
        source={{ uri: "https://www.youtube.com/watch?v=Uv9xq8jAIYE" }} //item.video.video_link
        // onLoadEnd={() => setShowLoader(false)}
      />
    </View>
  );
};

export default VideoWebViewScreen;
