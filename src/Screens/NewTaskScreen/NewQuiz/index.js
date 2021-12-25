import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Input from "~/Components/InputField";
import Styles from "../styles";
import Correct from "~/Assets/Svg/correct";
const NewQuiz = ({
  item,
  index,
  questionIsValid,
  setQuizQuestions,
  quizQuestions,
  setQuestion,
  setAnswerOne,
  setAnswerTwo,
  setAnswerThird,
  setAnswerFour,
  errorMessages,
}) => {
  const findItem = quizQuestions.find((q) => q?.i?.id === item?.i?.id);
  const questionText = (text) => {
    return (
      <Text style={{ fontSize: 18, fontWeight: "700", color: "#000000" }}>
        {text}
      </Text>
    );
  };
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <TouchableOpacity
        style={[
          Styles.deleteQuestionButton,
          { opacity: index === 0 ? 0.5 : 1 },
        ]}
        onPress={() =>
          setQuizQuestions(
            quizQuestions.filter((q) => q?.i?.id !== item?.i?.id)
          )
        }
        disabled={index === 0}
      >
        <Text style={Styles.newQuestionText}>Fshije</Text>
      </TouchableOpacity>
      <Input
        leftIcon={questionText("?")}
        placeholder={"Pyetje shenohet ketu"}
        secureText={false}
        onChangeTextInput={setQuestion}
        errorMessage={errorMessages.question ? errorMessages.question : null}
        keyboardType="default"
        secureTextEntry={false}
        enabled={true}
      />
      <Input
        leftIcon={questionText("1)")}
        placeholder="Shkruaj Ketu"
        onChangeTextInput={setAnswerOne}
        errorMessage={null}
        keyboardType="default"
        secureTextEntry={false}
        // icon={answerOne.length >= 1 && <Correct />}
        handleIcon={() => console.log("ONCLICK")}
        enabled={true}
      />
      <Input
        leftIcon={questionText("2)")}
        placeholder="Shkruaj Ketu"
        onChangeTextInput={setAnswerTwo}
        errorMessage={null}
        keyboardType="default"
        secureTextEntry={false}
        // icon={answerTwo.length >= 1 && <Correct />}
        handleIcon={() => console.log("ONCLICK")}
        enabled={true}
      />
      <Input
        leftIcon={questionText("3)")}
        placeholder="Shkruaj Ketu"
        onChangeTextInput={setAnswerThird}
        errorMessage={null}
        keyboardType="default"
        secureTextEntry={false}
        // icon={answerThird.length >= 1 && <Correct />}
        handleIcon={() => console.log("ONCLICK")}
        enabled={true}
      />
      <Input
        leftIcon={questionText("4)")}
        placeholder="Shkruaj Ketu"
        onChangeTextInput={setAnswerFour}
        errorMessage={null}
        keyboardType="default"
        secureTextEntry={false}
        // icon={answerFour.length >= 1 && <Correct />}
        handleIcon={() => console.log("ONCLICK")}
        enabled={true}
      />
      <TouchableOpacity
        style={[
          Styles.deleteQuestionButton,
          { opacity: questionIsValid ? 1 : 0.5 },
        ]}
        // onPress={() =>
        //   setQuizQuestions(
        //     quizQuestions.filter((q) => q?.i?.id !== item?.i?.id)
        //   )
        // }
        disabled={!questionIsValid}
      >
        <Text style={Styles.newQuestionText}>
          {findItem ? "Ndrysho" : "Ruaj"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewQuiz;
