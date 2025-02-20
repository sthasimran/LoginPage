import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import LoginForm from "../pages/LoginForm"
import NotFound from "../pages/NotFound"
import Navbar from "../components/Navbar"


const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<LoginForm/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;

