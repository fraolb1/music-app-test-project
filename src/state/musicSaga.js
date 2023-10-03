import { call, put, takeEvery } from "redux-saga/effects";
import {
  addMusicSuccess,
  editMusicSucces,
  getMusicsSuccess,
} from "./musicState";
import axios from "axios";

function* GetMusicsFetch() {
  const musics = yield call(() => fetch("http://localhost:3000/musics"));
  const formattedMusic = yield musics.json();
  yield put(getMusicsSuccess(formattedMusic));
}

function* AddMusic(action) {
  try {
    const res = yield call(() =>
      axios.post("http://localhost:3000/musics", action.payload)
    );
    yield put(addMusicSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* EditMusic(action) {
  try {
    const res = yield call(() => {
      console.log(action.payload);
      return axios.put(
        `http://localhost:3000/musics/${action.payload.id}`,
        action.payload
      );
    });
    yield put(editMusicSucces(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* musicSaga() {
  yield takeEvery("musics/getMusicsFetch", GetMusicsFetch);
}

function* addMusicSaga() {
  yield takeEvery("musics/addMusic", AddMusic);
}

function* editMusicSaga() {
  yield takeEvery("musics/editMusic", EditMusic);
}

export { musicSaga, addMusicSaga, editMusicSaga };
