import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import Header from "~/Components/Header";
import { useNavigation } from "@react-navigation/native";
import Colors from "~/Assets/Colors";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import { StatusBar } from "react-native";
import DeleteIcon from "~/Assets/Svg/delete";
import isProfessor from "~/Functions/isProfessor";
import TaskActions from "~/Store/Task/Actions";
import { useDispatch } from "react-redux";

const VideoWebViewScreen = ({ route }) => {
  const dispatch = useDispatch();

  const professor = isProfessor();
  const navigation = useNavigation();
  const { item } = route.params;

  const onResponse = (type) => {
    if (type === "error") {
      toasterMessage("Ka ndodhur nje gabim gjate largimit te detyres", "error");
    } else {
      navigation.pop();
    }
  };
  const handleRemoveTask = () => {
    dispatch(TaskActions.deleteTask(item?._id, onResponse));
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Header
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        rightIcon={professor && <DeleteIcon />}
        handleRightIcon={professor && handleRemoveTask}
        safeAreaBackgroundColor={Colors.youtubeBackground}
        backgroundColor={Colors.youtubeBackground}
        height={50}
      />
      <WebView source={{ uri: item?.video?.video_link }} />
    </View>
  );
};

export default VideoWebViewScreen;
