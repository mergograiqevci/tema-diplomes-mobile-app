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
}

export default Group;
