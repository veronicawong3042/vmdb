import { BrowserRouter, Route, Router } from "react-router-dom";
import PageHome from "../pages/pageHome";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;