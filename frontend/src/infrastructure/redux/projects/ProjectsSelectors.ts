import { RootState } from "../store";

export const selectProjects = (state: RootState) => state.projects.data;
export const selectLoading = (state: RootState) => state.projects.loading;
