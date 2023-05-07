import React from 'react';
import Router from "./Router";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RouterList from "./RouterList";

const index = () => {
    return (
        <BrowserRouter>
            <Router>
                <Routes>
                    <Route>
                        {
                            RouterList.map((route, i) => (
                                <Route key={i} path={route.path} element={route.component} />
                            ))
                        }
                    </Route>
                </Routes>
            </Router>
        </BrowserRouter>
    );
};

export default index;
