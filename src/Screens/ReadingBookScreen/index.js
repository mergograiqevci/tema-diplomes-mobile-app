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
const ReadingBookScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { item } = route.params;
  const [err, setErr] = useState(false);
  const source = {
    uri: item?.book?.pdf,
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

  const handleRemoveTask = () => {
    dispatch(TaskActions.deleteTask(item?._id, onResponse));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon={<ArrowLeft />}
        title={item?.title}
        handleLeftIcon={() => navigation.goBack()}
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
        onLoadComplete={(numberOfPages, filePath) => {}}
        onPageChanged={(page, numberOfPages) => {}}
        onError={(error) => {
          setErr(true);
        }}
        onPressLink={(uri) => {}}
        style={Styles.pdfView}
        enablePaging={true}
        page={1}
      />
    </View>
  );
};

export default ReadingBookScreen;
