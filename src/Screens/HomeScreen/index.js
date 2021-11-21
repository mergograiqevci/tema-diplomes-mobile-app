import React from "react";
import { View, FlatList } from "react-native";
import Header from "~/Components/Header";
import Colors from "~/Assets/Colors";
import ProfileBox from "~/Components/ProfileBox";
import TasksBox from "~/Components/TasksBox";
const HomeScreen = () => {
  const data = [
    {
      id: 1,
      image: "https://iconape.com/wp-content/files/xa/367772/png/367772.png",
      backgroundColor: "#078080",
      title: "NodeJS - The Complete Guide",
      description:
        "Node is useful for developing applications that require a persistent",
    },
    {
      id: 2,
      image: "https://iconape.com/wp-content/files/xa/367772/png/367772.png",
      backgroundColor: "#074D80",
      title: "NodeJS - The Complete Guide",
      description:
        "Node is useful for developing applications that require a persistent",
    },
    {
      id: 3,
      image: "https://iconape.com/wp-content/files/xa/367772/png/367772.png",
      backgroundColor: "#078080",
      title: "NodeJS - The Complete Guide",
      description:
        "Node is useful for developing applications that require a persistent",
    },
    {
      id: 4,
      image: "https://iconape.com/wp-content/files/xa/367772/png/367772.png",
      backgroundColor: "#078080",
      title: "NodeJS - The Complete Guide",
      description:
        "Node is useful for developing applications that require a persistent",
    },
  ];

  const renderItem = ({ item }) => {
    return <TasksBox item={item} />;
  };

  const headerFlatList = () => {
    return (
      <View style={{ flex: 1, marginBottom: 70 }}>
        <Header
          safeAreaBackgroundColor={Colors.appBaseColor}
          backgroundColor={Colors.appBaseColor}
          height={170}
        />
        <ProfileBox />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={headerFlatList()}
      />
    </View>
  );
};

export default HomeScreen;
