import Request from "~/API/Request";

class Group {
  static async leaveGroup(token, id) {
    let groupData = await Request.post(
      `/groups/leave_group`,
      { _id: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return groupData;
  }
  static async createNewGroup(token, title, students) {
    let groupData = await Request.post(
      `/groups/create_new_group`,
      { title, students },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return groupData;
  }
  static async findAllStudentsByProfessor(token, title) {
    let groupData = await Request.get(
      `/groups/find_all_students_by_professor`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return groupData;
  }
}

export default Group;
