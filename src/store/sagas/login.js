import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as LoginActions } from "../ducks/login";

import { navigate } from "../../service/navigation";

export default function* login(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload}`);
    yield put(LoginActions.signUpSuccess(response.data));
    navigate("About");
  } catch (error) {
    alert(error);
  }
}
