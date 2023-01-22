import { useCallback, useEffect } from "react";
import {
  selectLoading,
  selectProjects,
} from "../../../infrastructure/redux/projects/ProjectsSelectors";
import {
  save as saveProjects,
  loading as loadingProjects,
} from "../../../infrastructure/redux/projects/ProjectsSlice";
import { RetrieveProjectsUsecase } from "../../../usecases/RetrieveProjectsUsecase";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/ReduxHook";

type ProjectsPageProps = {
  retrieveProjectsUsecase: RetrieveProjectsUsecase;
};

export function ProjectsPage({ retrieveProjectsUsecase }: ProjectsPageProps) {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);
  const loading = useAppSelector(selectLoading);

  const getProjects = useCallback(async () => {
    dispatch(loadingProjects(true));
    try {
      const data = await retrieveProjectsUsecase.execute();
      dispatch(saveProjects(data));
    } catch (err) {
      dispatch(loadingProjects(false));
    } finally {
      dispatch(loadingProjects(false));
    }
  }, [dispatch, loadingProjects, retrieveProjectsUsecase]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  function renderProjects() {
    if (loading) {
      return <div>loading...</div>;
    }
    return projects.map((project) => (
      <div key={project.id}>{project.name}</div>
    ));
  }

  return (
    <div>
      <h1>Projects</h1>
      {renderProjects()}
    </div>
  );
}
