import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/loginSlice";
import createSagaMiddleware from "redux-saga";
import rootsaga from "../sagas/rootSaga";
import createJobSlice from "../slices/createJobSlice";

const mysaga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    validate: loginSlice,
    createjob: createJobSlice,
  },
  middleware: (getDefaultmidleware) => getDefaultmidleware().concat(mysaga),
});
mysaga.run(rootsaga);
export default store;
