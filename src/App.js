import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <Checkout></Checkout>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
            </Routes>
        </div>
    );
}

export default App;
