import { useEffect } from "react";
import { retrieveProjectsEffect } from "../../../infrastructure/redux/projects/ProjectsEffects";
import {
  selectLoading,
  selectProjects,
} from "../../../infrastructure/redux/projects/ProjectsSelectors";
import { RetrieveProjectsUsecase } from "../../../usecases/RetrieveProjectsUsecase";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/ReduxHook";

type ProjectsPageProps = {
  retrieveProjectsUsecase: RetrieveProjectsUsecase;
};

export function ProjectsPage({ retrieveProjectsUsecase }: ProjectsPageProps) {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(
      retrieveProjectsEffect({
        retrieveProjectsUsecase,
      })
    );
  }, [dispatch, retrieveProjectsUsecase]);

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
