import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Colors from "~/Assets/Colors";
import Profile from "~/Assets/Svg/profile";
import Styles from "./styles";
import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
const ProfileBox = ({ height }) => {
  const data = [
    { title: "Grupe", count: 4 },
    { title: "Video", count: 10 },
    { title: "Libra", count: 5 },
    { title: "Pike", count: 70 },
  ];

  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  return (
    <View style={Styles.container}>
      <View
        style={[
          Styles.profileView,
          {
            marginTop: safeAreaSize.top + 20,
            height: height,
          },
        ]}
      >
        <View style={{ alignItems: "center" }}>
          {height > 151 && <Profile height={height / 3.5} width={92} />}
          {height > 122 && (
            <Text style={Styles.nameText}>Mergim Graiqevci</Text>
          )}
        </View>

        <View style={Styles.mapView}>
          {data.map((item) => (
            <ProfileDetails key={item.count} item={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProfileBox;
