import { createBrowserRouter } from "react-router-dom";
import RootPage from "../ui/pages/root/RootPage";
import HomePage from "../ui/pages/home/HomePage";
import SignInPage, { signInAction } from "../ui/pages/sign_in/SignInPage";
import SignUpPage, { signUpAction } from "../ui/pages/sign_up/SignUpPage";
import { getAccessToken } from "../service/local/user";
import { logoutAction } from "../ui/pages/logout/LogoutPage";
import ProfilePage, { profileLoader } from "../ui/pages/profile/ProfilePage";

export const appBrowserRouter = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    id: "root",
    loader: async ({request, params}) => {
        const token = getAccessToken();
        return token;
    },
    children: [
      {
        path: "",
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <SignInPage />,
        action: signInAction,
      },
      {
        path: "register",
        element: <SignUpPage />,
        action: signUpAction
      },
      {
        path: "logout",
        action: logoutAction
      },
      {
        path: "profile",
        element: <ProfilePage />,
        loader: profileLoader
      }
    ],
  },
]);
