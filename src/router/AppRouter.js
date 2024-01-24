import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import WorkShop from "../pages/WorkShop";
import Footer from "../components/Footer";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />}></Route>
                <Route path="/workshop" element={<WorkShop />}></Route>
            </Routes>
            <Footer author={'Candy Kwong, Marie Huang, Veronica Wong'}/>    
        </BrowserRouter>
    );
}

export default AppRouter;