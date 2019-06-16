import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as SessionActions } from "../ducks/Session";

export function* Session(action) {
  try {
    const { data } = yield call(api.post, `/sessions`, action.payload);
    console.tron.log(data);
    yield put(SessionActions.sessionSuccess(data));
  } catch (err) {
    yield put(SessionActions.sessionFailure("Falha ao iniciar a sessão"));
  }
}
