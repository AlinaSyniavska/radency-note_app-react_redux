import {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";

const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}></Route>
            </Routes>
        </div>
    );
};

export {App};