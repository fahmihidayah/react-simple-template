import { redirect } from "react-router-dom";
import { setAccessToken, setRefreshToken } from "../../../service/local/user";

const LogoutPage = () => {
  return <></>;
};

export const logoutAction = () => {
  setAccessToken("");
  setRefreshToken("");
  return redirect("/");
};

export default LogoutPage;
