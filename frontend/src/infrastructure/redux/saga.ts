import { all } from "redux-saga/effects";
import projectsEffects from "./projects/ProjectsEffects";

export default function* rootSaga() {
  yield all([projectsEffects()]);
}
