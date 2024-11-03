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
      queryFn: async (_args, { dispatch }, _extraOptions, baseQuery) => {
        try {
          if (sessionStorage.hasOwnProperty("tasks")) {
            return dispatch(loadSessionTasks());
          } else {
            return await baseQuery({
              url: "todos/"
            });
          }
        } catch (error) {
          console.error(error?.message);
          return { error: error?.message };
        }
      }
    })
  })
});

const taskSlice = createSlice({
  name: "task",
  initialState: [] as TaskType[],
  reducers: {
    loadSessionTasks: state => {
      if (sessionStorage.hasOwnProperty("tasks")) {
        const tasks = sessionStorage.getItem("tasks");
        state = JSON.parse(tasks as string) as TaskType[];
      }
      return state;
    },
    addTask: (state, { payload }) => {
      const tasks = [payload, ...state];
      sessionStorage.setItem("tasks", `${JSON.stringify(tasks)}`);
      return tasks;
    },
    toggleCompleteTask: (state, { payload }) => {
      const tasks = state.map(task =>
        task.id === payload.id ? { ...task, completed: !task.completed } : task
      );
      sessionStorage.setItem("tasks", `${JSON.stringify(tasks)}`);
      return tasks;
    },
    deleteTask: (state, { payload }) => {
      const tasks = state.filter(task => task.id !== payload.id);
      sessionStorage.setItem("tasks", `${JSON.stringify(tasks)}`);
      return tasks;
    }
  },
  extraReducers(builder) {
    builder.addMatcher(
      taskApi.endpoints.getAllTasks.matchFulfilled,
      (state, { payload }) => {
        state = payload;        
        if(payload)
          sessionStorage.setItem("tasks", `${JSON.stringify(payload)}`);

        return state;
      }
    );
  }
});

export default taskSlice.reducer;
export const {
  addTask,
  deleteTask,
  toggleCompleteTask,
  loadSessionTasks
} = taskSlice.actions;

// Exporting the generated methods from createApi
export const { useGetAllTasksQuery } = taskApi;
