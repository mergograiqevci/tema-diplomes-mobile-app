import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Play from "~/Assets/Svg/play";
import Styles from "./styles";
import Colors from "~/Assets/Colors";
import { useNavigation } from "@react-navigation/native";
import YoutubeVideoModal from "../YoutubeVideoModal";
import * as Progress from "react-native-progress";
const { width } = Dimensions.get("window");
import isProfessor from "~/Functions/isProfessor";
const TasksBox = ({ item }) => {
  const [youtubeModalVisible, setYoutubeModalVisible] = useState(false);
  const navigation = useNavigation();
  const imgStat =
    "https://www.nicepng.com/png/detail/222-2224770_react-native-icon-png.png";

  const startedReading = item?.book?.page;

  const professor = isProfessor();

  const percentage =
    parseInt(item?.book?.page) / parseInt(item?.book?.total_page);

  return (
    <TouchableOpacity
      style={[
        Styles.container,
        {
          backgroundColor:
            item.type === "book" ? Colors.blue : Colors.appBaseColor,
        },
      ]}
      onPress={() => {
        if (item.type === "book") {
          navigation.navigate("ReadingBookScreen", { item });
        } else {
          setYoutubeModalVisible(true);
        }
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: item[item?.type]?.image ? item[item?.type]?.image : imgStat,
          }}
          style={Styles.imageView}
        />
        <View style={Styles.textView}>
          <Text style={Styles.title}>{item.title}</Text>
          <Text style={Styles.description} numberOfLines={2}>
            {item[item.type].description}
          </Text>
        </View>
      </View>
      {item.type === "video" ? (
        <View style={Styles.icon}>
          <Play />
        </View>
      ) : (
        !professor ? (
          <View style={{ alignItems: "flex-end", marginTop: "-8%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between", width: width / 2.1 }}
            >
              <Text style={Styles.progressText}>Progresi</Text>
              <Text style={Styles.progressText}>
                {startedReading ? parseInt(percentage * 100) + "%" : "0%"}{" "}
              </Text>
            </View>
            <Progress.Bar
              progress={startedReading ? percentage : 0}
              width={width / 2.1}
              color="white"
            />
          </View>
        ) : (
          <View style={{ alignItems: "flex-end", marginTop: '-8%' }}>
            <View style={Styles.bgText}>
              <Text style={Styles.readBookText}>Lexoje</Text>
            </View>
          </View>
        )
      )}
      {youtubeModalVisible && (
        <YoutubeVideoModal
          item={item}
          modalVisible={youtubeModalVisible}
          setModalVisible={setYoutubeModalVisible}
        />
      )}
    </TouchableOpacity>
  );
};

export default TasksBox;
