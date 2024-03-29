import React, { useState, useEffect } from "react";
import { View, SectionList, TouchableOpacity } from "react-native";
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
import Reload from "~/Assets/Svg/reload";
import Styles from "./styles";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const threshold = 200;
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
    getToDo();
  }, []);

  useEffect(() => {
    if (refreshing) {
      getToDo();
      setRefreshing(false);
    }
  }, [refreshing]);

  useEffect(() => {
    if (toDoState === State.DONE) {
      setToDoStatistic(formatToDoStatistic(unFormatedToDoData, professor));
    }
  }, [toDoData]);

  const getToDo = () => {
    dispatch(ToDoActions.getToDo());
  };

  const handleOptionsInFlat = (e) => {
    let position = threshold - e.nativeEvent.contentOffset.y;
    if (position < 0) {
      topHeaderHeight !== 80 && setTopHeaderHeight(80);
    } else {
      position > 84 && setTopHeaderHeight(position);
    }
  };

  const renderItem = ({ item }) => {
    if (item?.isTask === true && item?.type !== "quiz") {
      return <TasksBox item={item} />;
    } else {
      return <OtherTasks item={item} />;
    }
  };

  const header = () => {
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

  const sectionListHeader = () => {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={Styles.reload} onPress={getToDo}>
          <Reload />
        </TouchableOpacity>
        {toDoState === State.PROCESSING && (
          <Loading animating={toDoState === State.PROCESSING} />
        )}
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
        stickySectionHeadersEnabled={false}
        style={{ marginTop: topHeaderHeight + 70 }}
        onScroll={handleOptionsInFlat}
        ListHeaderComponent={sectionListHeader}
        showsVerticalScrollIndicator={false}
      />
      {header()}
      <ProfileBox toDoStatistic={toDoStatistic} height={topHeaderHeight} />
    </View>
  );
};

export default HomeScreen;
