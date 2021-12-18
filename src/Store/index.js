import * as Redux from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { UserSlice } from "./User/Reducers";
import { ToDoSlice } from "./ToDo/Reducers";

export default configureStore({
  reducer: {
    User: UserSlice.reducer,
    ToDo: ToDoSlice.reducer,
  },
  middleware: [thunk],
});
