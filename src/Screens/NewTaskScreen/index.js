import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Colors from "~/Assets/Colors";
import Styles from "./styles";
import Input from "~/Components/InputField";
import User from "~/Assets/Svg/user";
import Correct from "~/Assets/Svg/correct";
const NewTaskScreen = ({ navigation }) => {
  const defaultBookValues = {
    taskTitle: "Autori",
    description: "Pershkrimi",
    link: "Pdf",
    image: "Image",
  };
  const defaultVideoValues = {
    taskTitle: "Titulli",
    description: "Pershkrimi",
    link: "Video Linku",
  };
  const [activeButton, setActiveButton] = useState("book");
  // inActiveNewTaskButton
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [quizQuestions, setQuizQuestion] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  const [defaultValues, setDefaultValues] = useState(defaultBookValues);

  const [question, setQuestion] = useState("Formula e kti");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThird, setAnswerThird] = useState("");
  const [answerFour, setAnswerFour] = useState("");

  useEffect(() => {
    if (activeButton === "book") {
      setDefaultValues(defaultBookValues);
    } else if (activeButton === "video") {
      setDefaultValues(defaultVideoValues);
    } else if (activeButton === "quiz") {
      console.log("Kuiz");
    }
  }, [activeButton]);

  const handleButtons = (button) => {
    setActiveButton(button);
    if (button === "book") {
      console.log("Book");
    } else if (button === "video") {
      console.log("video");
    } else if (button === "quiz") {
      console.log("Kuiz");
    }
  };

  const questionText = (text) => {
    return (
      <Text style={{ fontSize: 18, fontWeight: "700", color: "#000000" }}>
        {text}
      </Text>
    );
  };

  const childView = () => {
    if (activeButton === "book" || activeButton === "video") {
      return (
        <View style={{ flex: 1 }}>
          <Input
            leftIcon={<User />}
            placeholder={defaultValues.taskTitle}
            secureText={false}
            onChangeTextInput={setTaskTitle}
            errorMessage={
              errorMessages.taskTitle ? errorMessages.taskTitle : null
            }
            keyboardType="default"
            secureTextEntry={false}
            enabled={true}
          />
          <Input
            leftIcon={<User />}
            placeholder={defaultValues.description}
            secureText={false}
            onChangeTextInput={setDescription}
            errorMessage={
              errorMessages.description ? errorMessages.description : null
            }
            keyboardType="default"
            secureTextEntry={false}
            enabled={true}
          />
          <Input
            leftIcon={<User />}
            placeholder={defaultValues.link}
            secureText={false}
            onChangeTextInput={setLink}
            errorMessage={errorMessages.link ? errorMessages.link : null}
            keyboardType="default"
            secureTextEntry={false}
            enabled={true}
          />
          {defaultValues.image && (
            <Input
              leftIcon={<User />}
              placeholder={defaultValues.image}
              secureText={false}
              onChangeTextInput={setImage}
              errorMessage={errorMessages.image ? errorMessages.image : null}
              keyboardType="default"
              secureTextEntry={false}
              enabled={true}
            />
          )}
          <TouchableOpacity
            style={Styles.saveButton}
            onPress={() => buttonAction()}
          >
            <Text style={Styles.saveButtonText}>Ruaj</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Input
            leftIcon={questionText("?")}
            placeholder={"Pyetje shenohet ketu"}
            secureText={false}
            onChangeTextInput={setLink}
            errorMessage={
              errorMessages.question ? errorMessages.question : null
            }
            keyboardType="default"
            secureTextEntry={false}
            enabled={true}
          />
          <Input
            leftIcon={questionText("a)")}
            placeholder="Shkruaj Ketu"
            onChangeTextInput={setAnswerOne}
            errorMessage={null}
            keyboardType="default"
            secureTextEntry={false}
            icon={answerOne.length >= 1 && <Correct />}
            handleIcon={() => console.log("ONCLICK")}
            enabled={true}
          />
          <Input
            leftIcon={questionText("b)")}
            placeholder="Shkruaj Ketu"
            onChangeTextInput={setAnswerTwo}
            errorMessage={null}
            keyboardType="default"
            secureTextEntry={false}
            icon={answerTwo.length >= 1 && <Correct />}
            handleIcon={() => console.log("ONCLICK")}
            enabled={true}
          />
          <Input
            leftIcon={questionText("c)")}
            placeholder="Shkruaj Ketu"
            onChangeTextInput={setAnswerThird}
            errorMessage={null}
            keyboardType="default"
            secureTextEntry={false}
            icon={answerThird.length >= 1 && <Correct />}
            handleIcon={() => console.log("ONCLICK")}
            enabled={true}
          />
          <Input
            leftIcon={questionText("d)")}
            placeholder="Shkruaj Ketu"
            onChangeTextInput={setAnswerFour}
            errorMessage={null}
            keyboardType="default"
            secureTextEntry={false}
            icon={answerFour.length >= 1 && <Correct />}
            handleIcon={() => console.log("ONCLICK")}
            enabled={true}
          />
          <TouchableOpacity
            style={Styles.saveButton}
            onPress={() => buttonAction()}
          >
            <Text style={Styles.saveButtonText}>Ruaj</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.saveButton}
            onPress={() => buttonAction()}
          >
            <Text style={Styles.saveButtonText}>Perfundo Kuizin</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const buttonView = () => {
    return (
      <View style={Styles.buttonView}>
        <TouchableOpacity
          style={[
            Styles.singleButton,
            {
              backgroundColor:
                activeButton === "book"
                  ? Colors.appBaseColor
                  : Colors.inActiveNewTaskButton,
            },
          ]}
          onPress={() => handleButtons("book")}
        >
          <Text style={Styles.singleButtonText}>Liber</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.singleButton,
            {
              backgroundColor:
                activeButton === "video"
                  ? Colors.appBaseColor
                  : Colors.inActiveNewTaskButton,
            },
          ]}
          onPress={() => handleButtons("video")}
        >
          <Text style={Styles.singleButtonText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.singleButton,
            {
              backgroundColor:
                activeButton === "quiz"
                  ? Colors.appBaseColor
                  : Colors.inActiveNewTaskButton,
            },
          ]}
          onPress={() => handleButtons("quiz")}
        >
          <Text style={Styles.singleButtonText}>Kuiz</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Detyre e re"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <Text style={{ marginTop: 20, fontSize: 19, fontWeight: "600" }}>
          Zgjedhni
        </Text>
        {buttonView()}
        {childView()}
      </View>
    </View>
  );
};

export default NewTaskScreen;