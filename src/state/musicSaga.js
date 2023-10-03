import { call, put, takeEvery } from "redux-saga/effects";
import { getMusicSucces } from "./musicState";

function* workGetMusicsFetch() {
  const musics = yield call(() => fetch("http://localhost:3000/musics"));
  const formattedMusic = yield musics.json();
  yield put(getMusicSucces(formattedMusic));
}

function* musicSaga() {
  yield takeEvery("musics/getMusicsFetch", workGetMusicsFetch);
}

export default musicSaga;
