import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../../domain/models/Project";

type InitialState = {
  loading: boolean;
  data: Project[];
};

const initialState: InitialState = {
  loading: false,
  data: [],
};

const ProjectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    save(state, action: PayloadAction<Project[]>) {
      state.data = action.payload;
    },
    loading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { save, loading } = ProjectsSlice.actions;
export default ProjectsSlice.reducer;
