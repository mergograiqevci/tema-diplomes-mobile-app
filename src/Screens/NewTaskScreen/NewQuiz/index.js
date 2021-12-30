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
  numQuestion,
  setNumQuestion,
  quizQuestions,
  setQuestion,
  setAnswerOne,
  setAnswerTwo,
  setAnswerThird,
  setAnswerFour,
  newQuestion,
  changeQuestion,
  errorMessages,
}) => {
  const findItemIndex = quizQuestions.findIndex(
    (q) => parseInt(q?.id) === parseInt(item)
  );
  const questionText = (text) => {
    return (
      <Text style={{ fontSize: 18, fontWeight: "700", color: "#000000" }}>
        {text}
      </Text>
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
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}

      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
        }}
      >
        {index !== 0 && (
          <TouchableOpacity
            style={Styles.deleteQuestionButton}
            onPress={() => {
              const filterdQuestion = quizQuestions.filter(
                (q) => parseInt(q?.id) !== parseInt(item)
              );
              const filterdNumQuestion = numQuestion.filter(
                (nq) => nq !== item
              );
              setQuizQuestions(filterdQuestion);
              setNumQuestion(filterdNumQuestion);
            }}
          >
            <Text style={Styles.newQuestionText}>Fshije</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[Styles.deleteQuestionButton, { marginLeft: 10 }]}
          onPress={() => {
            if (findItemIndex !== -1) {
              changeQuestion(item);
            } else {
              console.log("new question");
              newQuestion();
            }
          }}
        >
          <Text style={Styles.newQuestionText}>
            {findItemIndex !== -1 ? "Ndrysho" : "Ruaj"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewQuiz;
