import React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Styles from "./styles";
import YoutubeXIcon from "~/Assets/Svg/youtubeXIcon";
const { height, width } = Dimensions.get("window");
import ToDoActions from "~/Store/ToDo/Actions";
import { useDispatch } from "react-redux";
import TaskActions from "~/Store/Task/Actions";
import toasterMessage from "~/Functions/toaster/toasterMessage";
import DeleteIcon from "~/Assets/Svg/delete";
import isProfessor from "~/Functions/isProfessor";
const VideoComponent = ({ item, setModalVisible }) => {
  const professor = isProfessor();
  const dispatch = useDispatch();
  const convertedItem = item?.task ? item?.task : item;
  const url = convertedItem?.video?.video_link;

  const getYouTubeVideoId = () => {
    let regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url?.match(regExp);
    if (match && match[2].length === 11) return match[2];
    else return null;
  };

  const responseForTask = () => {
    const request = {
      task_id: convertedItem?._id,
      type: "video",
      group_id: convertedItem?.group?._id,
      completed: true,
    };

    dispatch(ToDoActions.completeTask(request));
  };

  const onResponse = (type) => {
    if (type === "error") {
      toasterMessage("Ka ndodhur nje gabim gjate largimit te detyres", "error");
    } else {
      setModalVisible(false);
    }
  };
  const handleRemoveTask = () => {
    dispatch(TaskActions.deleteTask(convertedItem?._id, onResponse));
  };

  return (
    <View style={Styles.videoContainer}>
      {getYouTubeVideoId(url) && (
        <>
          <View
            style={{
              position: "absolute",
              top: 50,
              right: 20,
              zIndex: 100,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {professor && (
              <TouchableOpacity
                onPress={handleRemoveTask}
                style={{ marginRight: 40 }}
              >
                <DeleteIcon />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <YoutubeXIcon />
            </TouchableOpacity>
          </View>
          <YoutubePlayer
            width={width}
            height={height}
            play={true}
            videoId={getYouTubeVideoId(url)}
            webViewStyle={Styles.youtubeVideoStyle}
            onChangeState={(event) => {
              if (event === "ended") {
                if (!item?.task) {
                  responseForTask();
                }
                setModalVisible(false);
              }
            }}
          />
        </>
      )}
    </View>
  );
};

export default VideoComponent;
