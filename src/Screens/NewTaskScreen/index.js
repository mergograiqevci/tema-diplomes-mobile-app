import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Colors from "~/Assets/Colors";
import Styles from "./styles";
import Input from "~/Components/InputField";
import User from "~/Assets/Svg/user";
import TaskActions from "~/Store/Task/Actions";
import { useDispatch } from "react-redux";
import NewQuiz from "./NewQuiz";
import moment from "moment";
import formatQuizRequest from "~/Functions/array/formatQuizRequest";
import toasterMessage from "~/Functions/toaster/toasterMessage";
import DatePicker from "react-native-date-picker";

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

  const keys_to_keep_in_quiz_request = ["options", "question", "answer"];

  const [activeButton, setActiveButton] = useState("book");
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const dataIsValid =
    taskTitle?.trim() && description?.trim() && link?.trim() && image?.trim();

  const [errorMessages, setErrorMessages] = useState({});
  const [defaultValues, setDefaultValues] = useState(defaultBookValues);

  const [question, setQuestion] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThird, setAnswerThird] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answer, setAnswer] = useState([]);

  const questionIsValid =
    question?.trim() &&
    answerOne?.trim() &&
    answerTwo?.trim() &&
    answerThird?.trim() &&
    answerFour?.trim()
      ? true
      : false;

  const newQuestion = () => {
    setQuizQuestions([
      ...quizQuestions,
      {
        id: numQuestion[numQuestion.length - 1],
        question,
        options: [answerOne, answerTwo, answerThird, answerFour],
        answerOne,
        answerTwo,
        answerThird,
        answerFour,
        answer,
      },
    ]);
  };

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [numQuestion, setNumQuestion] = useState([1]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (quizQuestions.length >= 1) {
      setQuestion("");
      setAnswerOne("");
      setAnswerTwo("");
      setAnswerThird("");
      setAnswerFour("");
      setAnswer([]);
    }
  }, [quizQuestions]);

  useEffect(() => {
    if (activeButton === "book") {
      setDefaultValues(defaultBookValues);
    } else if (activeButton === "video") {
      setDefaultValues(defaultVideoValues);
    }
  }, [activeButton]);

  const handleButtons = (button) => {
    setActiveButton(button);
  };

  const onResponse = (type) => {
    if (type === "error") {
      toasterMessage(
        "Ka ndodhur nje gabim gjate regjistrimit te detyres",
        "error"
      );
    } else {
      toasterMessage("Detyra eshte regjistruar me suksese", "success");
      navigation.pop();
    }
  };

  const buttonAction = () => {
    let task;
    if (activeButton === "book" || activeButton === "video") {
      task = {
        description,
        [activeButton === "book" ? "pdf" : "video_link"]: link,
        image,
      };
    } else {
      task = {
        date: moment().utc(),
        details: formatQuizRequest(quizQuestions, keys_to_keep_in_quiz_request),
      };
    }
    dispatch(
      TaskActions.createNewTask(
        taskTitle,
        activeButton,
        "group",
        group_id,
        task,
        onResponse
      )
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <NewQuiz
        item={item}
        index={index}
        questionIsValid={questionIsValid}
        quizQuestions={quizQuestions}
        setQuizQuestions={setQuizQuestions}
        numQuestion={numQuestion}
        setNumQuestion={setNumQuestion}
        answer={answer}
        setAnswer={setAnswer}
        setQuestion={setQuestion}
        answerOne={answerOne}
        answerTwo={answerTwo}
        answerThird={answerThird}
        answerFour={answerFour}
        answer={answer}
        setAnswerOne={setAnswerOne}
        setAnswerTwo={setAnswerTwo}
        setAnswerThird={setAnswerThird}
        setAnswerFour={setAnswerFour}
        setAnswer={setAnswer}
        newQuestion={newQuestion}
        errorMessages={errorMessages}
      />
    );
  };

  const handleNewQuestionButton = () => {
    if (numQuestion.length === 0) {
      setNumQuestion([1]);
    } else {
      setNumQuestion([...numQuestion, numQuestion[numQuestion.length - 1] + 1]);
    }
  };

  const title = () => {
    return (
      <Input
        leftIcon={<User />}
        placeholder={defaultValues.taskTitle}
        secureText={false}
        onChangeTextInput={setTaskTitle}
        errorMessage={errorMessages.taskTitle ? errorMessages.taskTitle : null}
        keyboardType="default"
        secureTextEntry={false}
        enabled={true}
      />
    );
  };

  const datePicker = () => {
    return (
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          console.log("DATEE:", date);
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          console.log("onCancel:", onCancel);
        }}
      />
    );
  };

  const childView = () => {
    if (activeButton === "book" || activeButton === "video") {
      return (
        <View style={{ flex: 1 }}>
          {title()}
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
          {title()}
          {datePicker()}
          <FlatList
            data={numQuestion}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
          {numQuestion.length === quizQuestions.length && (
            <TouchableOpacity
              style={[Styles.newQuestionButton]}
              onPress={handleNewQuestionButton}
            >
              <Text style={Styles.newQuestionText}>Shto nje pytje te re</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[
              Styles.saveButton,
              {
                opacity:
                  numQuestion.length === quizQuestions.length &&
                  taskTitle.trim()
                    ? 1
                    : 0.5,
              },
            ]}
            onPress={() => buttonAction()}
            disabled={
              !(numQuestion.length === quizQuestions.length && taskTitle.trim())
            }
          >
            <Text style={Styles.saveButtonText}>Dergo</Text>
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
