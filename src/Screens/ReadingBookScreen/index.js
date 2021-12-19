import React, { useState } from "react";
import { View, Text } from "react-native";
import Pdf from "react-native-pdf";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Colors from "~/Assets/Colors";
import { useNavigation } from "@react-navigation/native";
import Styles from "./styles";
const ReadingBookScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [err, setErr] = useState(false);
  const source = {
    uri: item?.book?.pdf,
    cache: true,
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon={<ArrowLeft />}
        title={item.book.author}
        handleLeftIcon={() => navigation.goBack()}
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
