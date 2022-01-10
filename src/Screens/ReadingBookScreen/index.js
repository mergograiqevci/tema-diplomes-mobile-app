import React, { useState } from "react";
import { View, Text } from "react-native";
import Pdf from "react-native-pdf";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Colors from "~/Assets/Colors";
import { useNavigation } from "@react-navigation/native";
import Styles from "./styles";
import DeleteIcon from "~/Assets/Svg/delete";
import toasterMessage from "~/Functions/toaster/toasterMessage";
import TaskActions from "~/Store/Task/Actions";
import { useDispatch } from "react-redux";
import isProfessor from "~/Functions/isProfessor";
import ToDoActions from "~/Store/ToDo/Actions";
const ReadingBookScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { item } = route.params;
  const convertedItem = item?.task ? item?.task : item;
  const [err, setErr] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const source = {
    uri: convertedItem?.book?.pdf,
    cache: true,
  };
  const professor = isProfessor();

  const onResponse = (type) => {
    if (type === "error") {
      toasterMessage("Ka ndodhur nje gabim gjate largimit te detyres", "error");
    } else {
      navigation.pop();
    }
  };

  const responseForTask = () => {
    const id = convertedItem?.book?.total_page
      ? convertedItem?.pivot_id
      : convertedItem?._id;
    const request = {
      task_id: id,
      type: "book",
      group_id: convertedItem?.group?._id,
      page: currentPage,
      completed: currentPage === totalPage,
      total_page: totalPage,
    };

    dispatch(ToDoActions.completeTask(request));
  };

  const handleBackIcon = () => {
    if (!professor) {
      if (!item?.task) {
        if (!convertedItem?.book?.total_page) {
          responseForTask();
        } else {
          if (parseInt(convertedItem?.book?.page) < currentPage) {
            responseForTask();
          }
        }
      }
    }
    navigation.goBack();
  };

  const handleRemoveTask = () => {
    dispatch(TaskActions.deleteTask(convertedItem?._id, onResponse));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon={<ArrowLeft />}
        title={convertedItem?.title}
        handleLeftIcon={handleBackIcon}
        rightIcon={professor && <DeleteIcon />}
        handleRightIcon={professor && handleRemoveTask}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />

      {err && (
        <Text style={Styles.errorText}>
          Një gabim ka ndodhur gjatë leximit të librit
        </Text>
      )}
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          setTotalPage(numberOfPages);
        }}
        onPageChanged={(page, numberOfPages) => {
          setCurrentPage(page);
        }}
        onError={(error) => {
          setErr(true);
        }}
        onPressLink={(uri) => {}}
        style={Styles.pdfView}
        enablePaging={true}
        page={
          convertedItem?.book?.page ? parseInt(convertedItem?.book?.page) : 1
        }
      />
    </View>
  );
};

export default ReadingBookScreen;
