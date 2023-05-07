import React, {FC, PropsWithChildren} from 'react';
import Header from "../components/header/Header";

interface IRoute extends PropsWithChildren{

}
const Router: FC<IRoute> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Router;
