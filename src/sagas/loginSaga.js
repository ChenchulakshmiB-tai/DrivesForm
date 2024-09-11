import { call, put, takeEvery } from "redux-saga/effects";
import { loginRequest, loginFailure, loginSuccess } from "../slices/loginSlice";

const admin = {
  username: "admin@gmail.com",
  password: "admin123",
};
const user = {
  username: "user@gmail.com",
  password: "user123",
};

function* validateUser(action) {
  console.log(action.payload);
  console.log("inside the validateu");
  if (
    action.payload.username === admin.username &&
    action.payload.password === admin.password
  ) {
    yield put(loginSuccess("admin"));
  } else if (
    action.payload.password === user.password &&
    action.payload.password === user.password
  ) {
    yield put(loginSuccess("user"));
  } else {
    yield put(loginFailure("failed to login"));
  }
}
export default function* watchSaga1() {
  yield takeEvery(loginRequest.type, validateUser);
}
