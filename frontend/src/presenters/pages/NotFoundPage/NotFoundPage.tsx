import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/Paths";
import { RedirectLink } from "./NotFoundPageStyles";

type NotFoundPageProps = {};

export function NotFoundPage({}: NotFoundPageProps) {
  const navigate = useNavigate();

  const redirectToProjectsPage = useCallback(() => {
    navigate(Paths.PROJECTS);
  }, []);

  return (
    <div>
      <h1>404</h1>
      <h2>Ooops, page not found</h2>
      <p>The page you're looking for no longer exists.</p>
      <p>
        Return to the{" "}
        <RedirectLink onClick={redirectToProjectsPage}>
          projects page
        </RedirectLink>{" "}
        and remember: you haven't seen anything.
      </p>
    </div>
  );
}
