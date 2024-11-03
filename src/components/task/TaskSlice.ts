import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TaskType = {
  id: number;
  completed: boolean;
  title: string;
};

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com/users/1/`
  }),

  endpoints: builder => ({
    getAllTasks: builder.query<TaskType[], void>({
      query: () => ({
        url: "todos/",
      })
    })
  })
});

const taskSlice = createSlice({
  name: "task",
  initialState: [] as TaskType[],
  reducers: {
    addTodo: (state, { payload }) => {
      return [payload, ...state];
    },
    deleteTodo: (state, { payload }) => {
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("user", `${JSON.stringify(state)}`);
      return state;
    }
  }
});


export default taskSlice.reducer;
export const { addTodo, deleteTodo,  } = taskSlice.actions;

// Exporting the generated methods from createApi
export const {
	useGetAllTasksQuery,
} = taskApi;