import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { makeProjectsPageFactory } from "../../main/factories/pages/ProjectsPageFactory";
import { Paths } from "./Paths";

const router = createBrowserRouter([
  {
    path: Paths.PROJECTS,
    element: makeProjectsPageFactory(),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
