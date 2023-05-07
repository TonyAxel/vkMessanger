import {ReactNode} from "react";
import LoginPage from "../components/pages/loginPage/LoginPage";

interface IRouterList {
    path: string,
    component: ReactNode
}

const RouterList: IRouterList[] = [
    {path: "/", component: <LoginPage />}
]

export default RouterList;