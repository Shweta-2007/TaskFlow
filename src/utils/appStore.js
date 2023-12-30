// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./tasksSlice";
import tasksSaga from "./tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const appStore = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run your Sagas
sagaMiddleware.run(tasksSaga);

export default appStore;
