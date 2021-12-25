import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Colors from "~/Assets/Colors";
import Profile from "~/Assets/Svg/profile";
import Styles from "./styles";
import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
const ProfileBox = ({ height, toDoStatistic }) => {
  const myProfile = useSelector((state) => state.User?.myProfile);

  return (
    <View style={Styles.container}>
      <View
        style={[
          Styles.profileView,
          {
            marginTop: 70, //safeAreaSize?.top + 20,
            height: height,
          },
        ]}
      >
        <View style={{ alignItems: "center" }}>
          {height > 151 && <Profile height={height / 3.5} width={92} />}
          {height > 122 && (
            <Text style={Styles.nameText}>ID: {myProfile?.data?._id}</Text>
          )}
        </View>

        <View style={Styles.mapView}>
          {toDoStatistic.map((item, index) => (
            <ProfileDetails key={index} item={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProfileBox;
