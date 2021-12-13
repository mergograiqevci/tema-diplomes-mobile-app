import Request from "~/API/Request";

class User {
  static async login(id, password) {
    let userData = await Request.post(`/auth/login`, {
      id,
      password,
    });

    return userData;
  }
  static async register_student(token, request) {
    let userData = await Request.post(`/auth/register`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return userData;
  }
  static async reset_password(request) {
    let userData = await Request.post(`/auth/reset_password`, request);

    return userData;
  }
  static async my_profile(token) {
    let userData = await Request.get(`/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return userData;
  }
}

export default User;
