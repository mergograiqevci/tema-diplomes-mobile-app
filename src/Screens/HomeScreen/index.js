import React, { useState, useEffect } from "react";
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
import ToDoActions from "~/Store/ToDo/Actions";
import { useSelector, useDispatch } from "react-redux";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const threshold = 200;
  const [flatListPosition, setFlatListPosition] = useState(0);
  const [topHeaderHeight, setTopHeaderHeight] = useState(threshold);

  const toDoReducer = useSelector((state) => state?.ToDo);
  const toDoData = toDoReducer?.toDoData;
  const toDoError = toDoReducer?.toDoError;
  const toDoState = toDoReducer?.toDoState;

  // console.log("toDoData", toDoData[0].data);
  useEffect(() => {
    dispatch(ToDoActions.getToDo());
  }, []);

  useEffect(() => {
    let position = threshold - flatListPosition;
    position > 84 && setTopHeaderHeight(position);
  }, [flatListPosition]);

  const handleOptionsInFlat = (e) => {
    setFlatListPosition(e.nativeEvent.contentOffset.y);
  };

  const renderItem = ({ item }) => {
    if (item?.isTask === true && item?.type !== "quiz") {
      return <TasksBox item={item} />;
    } else {
      return <OtherTasks item={item} />;
    }
  };

  const headerFlatList = () => {
    return (
      <View style={{ flex: 1, marginBottom: 70, position: "absolute" }}>
        <Header
          safeAreaBackgroundColor={Colors.appBaseColor}
          backgroundColor={Colors.appBaseColor}
          height={topHeaderHeight - topHeaderHeight / 3}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={toDoData}
        bounces={false}
        keyExtractor={(item, index) => item + index}
        // ListHeaderComponent={headerFlatList()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        style={{ marginTop: topHeaderHeight + 80 }}
        onScroll={handleOptionsInFlat}
      />
      {headerFlatList()}
      <ProfileBox height={topHeaderHeight} />
    </View>
  );
};

export default HomeScreen;
