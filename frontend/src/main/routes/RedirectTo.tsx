import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type RedirectToProps = {
  url: string;
};

export function RedirectTo({ url }: RedirectToProps) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(url);
  }, []);

  return <></>;
}
