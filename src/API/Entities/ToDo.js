import Request from "~/API/Request";

class ToDo {
  static async getToDo(token, role) {
    let toDoData = await Request.get(
      `/tasks/${role === "professor" ? "todo_professor" : "todo"}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return toDoData;
  }
  static async completeQuiz(token, request) {
    let toDoData = await Request.post(`/tasks/complete_quiz`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return toDoData;
  }
  static async canCompleteQuiz(token, request) {
    let toDoData = await Request.post(`/tasks/can_complete_quiz`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return toDoData;
  }
  static async getQuizResult(token, quiz_id) {
    let toDoData = await Request.get(
      `/tasks/get_quiz_result?quiz_id=${quiz_id}`,
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
