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
        url: "todos/"
      })
    })
  })
});

const taskSlice = createSlice({
  name: "task",
  initialState: [] as TaskType[],
  reducers: {
    addTask: (state, { payload }) => {
      return [payload, ...state];
    },
    toggleCompleteTask: (state, { payload }) => {
      return state.map((task) => (task.id === payload.id ? { ...task, completed: !task.completed } : task));
    },
    deleteTask: (state, { payload }) => {
      return state.filter((task) => task.id !== payload.id);
      
    }
  },
  extraReducers(builder) {
    builder.addMatcher(
      taskApi.endpoints.getAllTasks.matchFulfilled,
      (state, { payload }) => {
        state = payload;        
        sessionStorage.setItem("tasks", `${JSON.stringify(payload)}`);

        return state;
      }
    );
  }
});

export default taskSlice.reducer;
export const { addTask, deleteTask, toggleCompleteTask } = taskSlice.actions;

// Exporting the generated methods from createApi
export const { useGetAllTasksQuery } = taskApi;
