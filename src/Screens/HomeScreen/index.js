import React, { useState, useEffect } from "react";
import { View, SectionList, RefreshControl } from "react-native";
import Header from "~/Components/Header";
import Colors from "~/Assets/Colors";
import ProfileBox from "~/Components/ProfileBox";
import TasksBox from "~/Components/TasksBox";
import OtherTasks from "~/Components/OtherTasks";
import SectionHeader from "~/Components/SectionHeader";
import ToDoActions from "~/Store/ToDo/Actions";
import { useSelector, useDispatch } from "react-redux";
import State from "~/Store/State";
import formatToDoStatistic from "~/Functions/array/formatToDoStatistic";
import isProfessor from "~/Functions/isProfessor";
import Loading from "~/Components/Loading";
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const threshold = 200;
  const [flatListPosition, setFlatListPosition] = useState(0);
  const [topHeaderHeight, setTopHeaderHeight] = useState(threshold);
  const [refreshing, setRefreshing] = useState(false);

  const toDoReducer = useSelector((state) => state?.ToDo);
  const toDoData = toDoReducer?.toDoData;
  const toDoError = toDoReducer?.toDoError;
  const toDoState = toDoReducer?.toDoState;
  const unFormatedToDoData = toDoReducer?.unFormatedToDoData;
  const [toDoStatistic, setToDoStatistic] = useState([]);
  const professor = isProfessor();
  const toDoWithoutGroups = toDoData?.filter((i) => i?.key !== "groups");

  useEffect(() => {
    dispatch(ToDoActions.getToDo());
  }, []);

  useEffect(() => {
    if (refreshing) {
      dispatch(ToDoActions.toDo());
      setRefreshing(false);
    }
  }, [refreshing]);

  useEffect(() => {
    if (toDoState === State.DONE) {
      setToDoStatistic(formatToDoStatistic(unFormatedToDoData));
    }
  }, [toDoData]);

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
        sections={toDoWithoutGroups}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        style={{ marginTop: topHeaderHeight + 80 }}
        onScroll={handleOptionsInFlat}
        ListHeaderComponent={
          toDoState === State.PROCESSING && (
            <Loading animating={toDoState === State.PROCESSING} />
          )
        }
        refreshControl={
          <RefreshControl
            tintColor={Colors.white}
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
          />
        }
      />
      {headerFlatList()}

      <ProfileBox toDoStatistic={toDoStatistic} height={topHeaderHeight} />
    </View>
  );
};

export default HomeScreen;
