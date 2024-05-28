import { useNavigate } from "react-router-dom";
import { getUser } from "../../helper/userToken";
import { useEffect } from "react";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const token = getUser();
  console.log(token);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!token) {
      navigate("/signup");
    }
  }, []);
  return <div>Home page</div>;
}

export default index;
