import Request from "~/API/Request";

class ToDo {
  static async getToDo(token) {
    let toDoData = await Request.get(`/tasks/todo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return toDoData;
  }
  static async completeQuiz(token, quiz_id, quiz_answers) {
    let toDoData = await Request.post(
      `/tasks/complete_quiz`,
      { quiz_id, quiz_answers },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return toDoData;
  }
  static async canCompleteQuiz(token, quiz_id) {
    let toDoData = await Request.post(
      `/tasks/can_complete_quiz`,
      { quiz_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return toDoData;
  }
  static async getQuizResult(token, id) {
    let toDoData = await Request.post(
      `/tasks/get_quiz_result`,
      { quiz_id: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return toDoData;
  }
}

export default ToDo;
