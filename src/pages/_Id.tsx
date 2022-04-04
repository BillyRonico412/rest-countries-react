import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Id() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.id || !/^[0-9]+$/.test(params.id)) navigate("/404");
  }, [navigate, params.id]);

  return <div>Id</div>;
}

export default Id;
