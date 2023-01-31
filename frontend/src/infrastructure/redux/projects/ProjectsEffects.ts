import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLeading } from "redux-saga/effects";
import { Project } from "../../../domain/models/Project";
import { RetrieveProjectsUsecase } from "../../../usecases/RetrieveProjectsUsecase";
import {
  save as saveProjects,
  loading as loadingProjects,
} from "./ProjectsSlice";

type RetrieveProjectsAction = {
  retrieveProjectsUsecase: RetrieveProjectsUsecase;
};

export const retrieveProjectsEffect = createAction<RetrieveProjectsAction>(
  "effect/retrieveProjects"
);

function* watchRetrieveProjectsEffect(
  action: PayloadAction<RetrieveProjectsAction>
) {
  try {
    const { retrieveProjectsUsecase } = action.payload;
    yield put(loadingProjects(true));
    const data: Project[] = yield call(
      retrieveProjectsUsecase.execute.bind(retrieveProjectsUsecase)
    );
    yield put(saveProjects(data));
  } catch (e) {
    console.log(e);
    yield put(loadingProjects(false));
  } finally {
    yield put(loadingProjects(false));
  }
}

export default function* projectsEffects() {
  yield all([
    takeLeading(retrieveProjectsEffect.toString(), watchRetrieveProjectsEffect),
  ]);
}
