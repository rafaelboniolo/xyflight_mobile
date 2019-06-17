import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as SessionActions } from "../ducks/Session";
import { navigate } from "../../services/navigation";

export function* Session(action) {
  try {
    const { data } = yield call(api.post, `/sessions`, action.payload);
    yield put(SessionActions.sessionSuccess(data));
    navigate("Authenticated");
  } catch (err) {
    yield put(SessionActions.sessionFailure("Falha ao iniciar a sessão"));
  }
}
