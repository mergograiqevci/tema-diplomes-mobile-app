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
}

export default ToDo;
