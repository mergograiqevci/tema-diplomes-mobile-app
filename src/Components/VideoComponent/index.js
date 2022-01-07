import React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Styles from "./styles";
import YoutubeXIcon from "~/Assets/Svg/youtubeXIcon";
const { height, width } = Dimensions.get("window");

const VideoComponent = ({ item, setModalVisible }) => {
  const url = item?.video?.video_link;

  const getYouTubeVideoId = () => {
    let regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url?.match(regExp);
    if (match && match[2].length === 11) return match[2];
    else return null;
  };

  return (
    <View style={Styles.videoContainer}>
      {getYouTubeVideoId(url) && (
        <>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{ position: "absolute", top: 50, right: 20, zIndex: 100 }}
          >
            <YoutubeXIcon />
          </TouchableOpacity>
          <YoutubePlayer
            width={width}
            height={height}
            play={true}
            videoId={getYouTubeVideoId(url)}
            webViewStyle={Styles.youtubeVideoStyle}
            onChangeState={(event) => {
              console.log("EVENTI:", event);
              // event === "ended" && dispatch(ToDoReducers.toggleVideoModal());
            }}
          />
        </>
      )}
    </View>
  );
};

export default VideoComponent;
