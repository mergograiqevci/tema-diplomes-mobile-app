import * as API from '~/API';
import * as UserReducers from './Reducers';

class UserActions {

    static login(username, password) {
        return (dispatch) => {
            
            dispatch(UserReducers.loginStart());

            API.User.login(username, password)
            .then(data => {
                dispatch(UserReducers.loginDone(data));
            })
            .catch(error => {
                dispatch(UserReducers.loginFailed(error));
            })
        };  
    }
}

export default UserActions;