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
}

export default ToDo;
