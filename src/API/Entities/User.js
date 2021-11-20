import Request from "~/API/Request";

class User {
    
    static async login(username, password) {
        let userData = 
            await Request.post(
                `/login`,
                {
                    username,
                    password
                }
            );

        return userData;
    }
}

export default User;