import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./tasksSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) => [
    sagaMiddleware,
    ...getDefaultMiddleware(),
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
