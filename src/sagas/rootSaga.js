import watchSaga1 from "./loginSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([watchSaga1()]);
}
export default rootSaga;
