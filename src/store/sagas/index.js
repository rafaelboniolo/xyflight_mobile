import { all, takeLatest, call, put, select } from "redux-saga/effects";

import { Types as SessionTypes } from "../ducks/Session";
import { Session } from "./Session";

export default function* rootSaga() {
  return yield all([takeLatest(SessionTypes.REQUEST, Session)]);
}
