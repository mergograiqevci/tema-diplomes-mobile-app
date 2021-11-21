import React from "react";
import { View, SectionList, Text } from "react-native";
import Header from "~/Components/Header";
import Colors from "~/Assets/Colors";
import ProfileBox from "~/Components/ProfileBox";
import TasksBox from "~/Components/TasksBox";
import OtherTasks from "~/Components/OtherTasks";
import groupsData from "~/Functions/fakeData/groupsData";
import tasksData from "~/Functions/fakeData/tasksData";
import completedData from "~/Functions/fakeData/completedData";
import failedData from "~/Functions/fakeData/failedData";
import SectionHeader from "~/Components/SectionHeader";
const HomeScreen = () => {
  const DATA = [
    {
      title: "Detyrat",
      data: tasksData,
    },
    {
      title: "Grupet",
      data: groupsData,
    },
    {
      title: "Perfunduara",
      data: completedData,
    },
    {
      title: "Deshtuara",
      data: failedData,
    },
  ];

  const renderItem = ({ item }) => {
    if (item.type === "task") {
      return <TasksBox item={item} />;
    } else {
      return <OtherTasks item={item} />;
    }
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
      <SectionList
        sections={DATA}
        bounces={false}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={headerFlatList()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
