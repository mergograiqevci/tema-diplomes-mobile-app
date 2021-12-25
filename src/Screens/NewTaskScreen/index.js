import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Colors from "~/Assets/Colors";
import Styles from "./styles";
import Input from "~/Components/InputField";
import User from "~/Assets/Svg/user";
import Correct from "~/Assets/Svg/correct";
import ToDoActions from "~/Store/ToDo/Actions";
import { useSelector, useDispatch } from "react-redux";
import NewQuiz from "./NewQuiz";
const NewTaskScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { group_id } = route.params;
  const defaultBookValues = {
    taskTitle: "Titulli",
    description: "Pershkrimi",
    link: "Pdf",
    image: "Image",
  };
  const defaultVideoValues = {
    taskTitle: "Titulli",
    description: "Pershkrimi",
    link: "Video Linku",
    image: "Image",
  };
  const [activeButton, setActiveButton] = useState("book");
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const dataIsValid =
    taskTitle?.trim() && description?.trim() && link?.trim() && image?.trim();

  const [errorMessages, setErrorMessages] = useState({});
  const [defaultValues, setDefaultValues] = useState(defaultBookValues);

  const [questionsLength, setQuestionsLength] = useState([]);
  const [question, setQuestion] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThird, setAnswerThird] = useState("");
  const [answerFour, setAnswerFour] = useState("");

  const questionIsValid =
    question?.trim() &&
    answerOne?.trim() &&
    answerTwo?.trim() &&
    answerThird?.trim() &&
    answerFour?.trim()
      ? true
      : false;

  const newQuestion = (quizQuestions) => {
    return {
      id:
        quizQuestions === undefined
          ? 0
          : quizQuestions[quizQuestions.length - 1]?.i?.id + 1,
      question,
      answerOne,
      answerTwo,
      answerThird,
      answerFour,
    };
  };

  console.log("questionIsValid", questionIsValid);
  const [quizQuestions, setQuizQuestions] = useState([
    { i: newQuestion(quizQuestions) },
  ]);

  console.log("quizQuestions", quizQuestions);
  useEffect(() => {
    if (quizQuestions.length >= 1) {
      setQuestion("");
      setAnswerOne("");
      setAnswerTwo("");
      setAnswerThird("");
      setAnswerFour("");
    }
  }, [quizQuestions]);

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

  const buttonAction = () => {
    if (activeButton === "book" || activeButton === "video") {
      dispatch(
        ToDoActions.createNewTask(taskTitle, activeButton, "group", group_id, {
          description,
          [activeButton === "book" ? "pdf" : "video_link"]: link,
          image,
        })
      );
    }
    console.log("inside ruaj button");
  };

  const renderItem = ({ item, index }) => {
    return (
      <NewQuiz
        item={item}
        index={index}
        questionIsValid={questionIsValid}
        quizQuestions={quizQuestions}
        setQuizQuestions={setQuizQuestions}
        setQuestion={setQuestion}
        setAnswerOne={setAnswerOne}
        setAnswerTwo={setAnswerTwo}
        setAnswerThird={setAnswerThird}
        setAnswerFour={setAnswerFour}
        errorMessages={errorMessages}
      />
    );
  };

  const handleNewQuestionButton = () => {
    setQuizQuestions([...quizQuestions, { i: newQuestion(quizQuestions) }]);
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
          <TouchableOpacity
            style={[Styles.saveButton, { opacity: !dataIsValid ? 0.6 : 1 }]}
            onPress={() => buttonAction()}
            disabled={!dataIsValid}
          >
            <Text style={Styles.saveButtonText}>Ruaj</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={quizQuestions}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />

          <TouchableOpacity
            style={[
              Styles.newQuestionButton,
              { opacity: questionIsValid ? 1 : 0.5 },
            ]}
            onPress={handleNewQuestionButton}
            disabled={!questionIsValid}
          >
            <Text style={Styles.newQuestionText}>Shto nje pytje te re</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.saveButton, { opacity: questionIsValid ? 1 : 0.5 }]}
            onPress={() => buttonAction()}
          >
            <Text style={Styles.saveButtonText}>Ruaj</Text>
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
      <FlatList
        data={[]}
        style={{ flex: 1 }}
        ListHeaderComponent={
          <View style={{ flex: 1, marginHorizontal: 25 }}>
            <Text style={{ marginTop: 20, fontSize: 19, fontWeight: "600" }}>
              Zgjedhni
            </Text>
            {buttonView()}
            {childView()}
          </View>
        }
      />
    </View>
  );
};

export default NewTaskScreen;
