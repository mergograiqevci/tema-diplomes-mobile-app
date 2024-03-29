import * as Redux from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { UserSlice } from "./User/Reducers";
import { ToDoSlice } from "./ToDo/Reducers";
import { GroupSlice } from "./Group/Reducers";
import { TaskSlice } from "./Task/Reducers";
export default configureStore({
  reducer: {
    User: UserSlice.reducer,
    ToDo: ToDoSlice.reducer,
    Group: GroupSlice.reducer,
    Task: TaskSlice.reducer,
  },
  middleware: [thunk],
});
