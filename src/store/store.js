import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import musicReducer from "../state/musicState";
import musicSaga from "../state/musicSaga";
import { all } from "redux-saga/effects";

const saga = createSagaMiddleware();

function* rootSaga() {
  yield all([musicSaga()]);
}

const store = configureStore({
  reducer: {
    musics: musicReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
