import Request from "~/API/Request";

class Task {
  static async findStudentsByTask(token, id) {
    let taskData = await Request.get(
      `/tasks/find_students_by_task?task_id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return taskData;
  }
  static async gradeTask(token, request) {
    let taskData = await Request.post(
      `/tasks/grade_task`,
      request,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return taskData;
  }
  static async createNewTask(token, request) {
    let taskData = await Request.post(`/tasks/create_new_task`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return taskData;
  }
}

export default Task;
