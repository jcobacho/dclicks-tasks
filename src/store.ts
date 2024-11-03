import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { taskApi } from "./components/task/TaskSlice";
import taskReducer from "./components/task/TaskSlice";

const store = configureStore({
	reducer: {
    	[taskApi.reducerPath]: taskApi.reducer,
		task: taskReducer,

    },
	middleware: (getDefaultMiddleware) => {
    	return getDefaultMiddleware()
        	.concat(taskApi.middleware)
	},
});

/**
 *  This is a very _common pattern_ for Redux.
 **/
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;