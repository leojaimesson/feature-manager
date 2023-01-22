import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { makeProjectsPageFactory } from "../../main/factories/pages/ProjectsPageFactory";
import { Paths } from "./Paths";
import { RedirectTo } from "./RedirectTo";

const router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <RedirectTo url={Paths.PROJECTS} />,
  },
  {
    path: Paths.PROJECTS,
    element: makeProjectsPageFactory(),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
