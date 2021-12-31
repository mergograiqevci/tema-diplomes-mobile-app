import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Input from "~/Components/InputField";
import Styles from "../styles";
import Correct from "~/Assets/Svg/correct";
import CheckBox from "@react-native-community/checkbox";

const NewQuiz = ({
  item,
  index,
  questionIsValid,
  setQuizQuestions,
  numQuestion,
  setNumQuestion,
  answer,
  setAnswer,
  quizQuestions,
  answerOne,
  answerTwo,
  answerThird,
  answerFour,
  setQuestion,
  setAnswerOne,
  setAnswerTwo,
  setAnswerThird,
  setAnswerFour,
  newQuestion,
  errorMessages,
}) => {
  const findItemIndex = quizQuestions.findIndex(
    (q) => parseInt(q?.id) === parseInt(item)
  );
  const numIndex = numQuestion.findIndex((n) => n === item);
  const questionText = (text) => {
    return (
      <Text style={{ fontSize: 18, fontWeight: "700", color: "#000000" }}>
        {text}
      </Text>
    );
  };

  const checkBox = (ans) => {
    let findAnswer;
    if (findItemIndex !== -1) {
      findAnswer = quizQuestions[findItemIndex].answer.find((a) => a === ans);
    } else {
      findAnswer = answer.find((a) => a === ans);
    }
    return (
      <CheckBox
        value={findAnswer ? true : false}
        tintColor="red"
        onTintColor="green"
        onCheckColor="green"
        onValueChange={() => {
          if (ans.trim()) {
            if (findAnswer) {
              setAnswer(answer.filter((a) => a !== ans));
            } else {
              setAnswer([...answer, ans]);
            }
          }
        }}
        style={{ marginLeft: 10 }}
        disabled={findItemIndex === -1 ? false : true}
      />
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Input
        leftIcon={questionText("?")}
        placeholder={"Pyetja shenohet ketu"}
        secureText={false}
        onChangeTextInput={setQuestion}
        errorMessage={errorMessages.question ? errorMessages.question : null}
        keyboardType="default"
        secureTextEntry={false}
        enabled={findItemIndex === -1 ? true : false}
        value={quizQuestions[findItemIndex]?.question}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "85%" }}>
          <Input
            leftIcon={questionText("1)")}
            placeholder="Shkruaj Ketu"
            onChangeTextInput={setAnswerOne}
            errorMessage={null}
            keyboardType="default"
            secureTextEntry={false}
            enabled={findItemIndex === -1 ? true : false}
            value={quizQuestions[findItemIndex]?.answerOne}
          />
        </View>
        {checkBox(
          quizQuestions[findItemIndex]?.answerOne
            ? quizQuestions[findItemIndex]?.answerOne
            : answerOne
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "85%" }}>
          <Input
            leftIcon={questionText("2)")}
            placeholder="Shkruaj Ketu"
            onChangeTextInput={setAnswerTwo}
            errorMessage={null}
            keyboardType="default"
            secureTextEntry={false}
            enabled={findItemIndex === -1 ? true : false}
            value={quizQuestions[findItemIndex]?.answerTwo}
          />
        </View>
        {checkBox(
          quizQuestions[findItemIndex]?.answerTwo
            ? quizQuestions[findItemIndex]?.answerTwo
            : answerTwo
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "85%" }}>
          <Input
            leftIcon={questionText("3)")}
            placeholder="Shkruaj Ketu"
            onChangeTextInput={setAnswerThird}
            errorMessage={null}
            keyboardType="default"
            secureTextEntry={false}
            enabled={findItemIndex === -1 ? true : false}
            value={quizQuestions[findItemIndex]?.answerThird}
          />
        </View>
        {checkBox(
          quizQuestions[findItemIndex]?.answerThird
            ? quizQuestions[findItemIndex]?.answerThird
            : answerThird
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "85%" }}>
          <Input
            leftIcon={questionText("4)")}
            placeholder="Shkruaj Ketu"
            onChangeTextInput={setAnswerFour}
            errorMessage={null}
            keyboardType="default"
            secureTextEntry={false}
            enabled={findItemIndex === -1 ? true : false}
            value={quizQuestions[findItemIndex]?.answerFour}
          />
        </View>
        {checkBox(
          quizQuestions[findItemIndex]?.answerFour
            ? quizQuestions[findItemIndex]?.answerFour
            : answerFour
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
        }}
      >
        {numIndex !== -1 && (
          <TouchableOpacity
            style={Styles.deleteQuestionButton}
            onPress={() => {
              if (findItemIndex !== -1) {
                const filterdQuestion = quizQuestions.filter(
                  (q) => parseInt(q?.id) !== parseInt(item)
                );
                setQuizQuestions(filterdQuestion);
              }
              const filterdNumQuestion = numQuestion.filter(
                (nq) => nq !== item
              );
              setNumQuestion(filterdNumQuestion);
            }}
          >
            <Text style={Styles.newQuestionText}>Fshije</Text>
          </TouchableOpacity>
        )}
        {findItemIndex === -1 && (
          <TouchableOpacity
            style={[
              Styles.deleteQuestionButton,
              { marginLeft: 10, opacity: questionIsValid ? 1 : 0.5 },
            ]}
            onPress={() => {
              newQuestion();
            }}
            disabled={!questionIsValid}
          >
            <Text style={Styles.newQuestionText}>{"Ruaj"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NewQuiz;
