import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { makeNotFoundPageFactory } from "../factories/pages/NotFoundPageFactory";
import { makeProjectsPageFactory } from "../factories/pages/ProjectsPageFactory";
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
  {
    path: Paths.NOT_FOUND,
    element: makeNotFoundPageFactory(),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
