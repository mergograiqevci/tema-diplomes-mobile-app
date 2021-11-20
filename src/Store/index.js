import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";

import { UserSlice } from './User/Reducers';


export default configureStore(
    {
        reducer: {
            User: UserSlice.reducer
        },
        middleware: [thunk]
    }
);