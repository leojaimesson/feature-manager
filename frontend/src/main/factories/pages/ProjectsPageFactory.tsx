import { ProjectsPage } from "../../../presenters/pages/ProjectsPage/ProjectsPage";
import { makeRetrieveProjectsUsecase } from "../usecases/RetrieveProjectsUsecaseFactory";

export function makeProjectsPageFactory() {
  return (
    <ProjectsPage retrieveProjectsUsecase={makeRetrieveProjectsUsecase()} />
  );
}
