import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
import BlogDetails from "./components/BlogDetails";
import BlogList from "./components/BlogList";
import Login from "./components/Login";


const AppRoute = () => {
  
    return (
        <div>

            {/* <h1>App Routes</h1> */}
            <BrowserRouter>
            <div>
                <Toolbar></Toolbar>
            </div>
                  <Routes>
                    <Route exact path="home" element={<Home />}/>
                    <Route path="blog-list" element={<BlogList />}/>
                    <Route path="blog-details" element={<BlogDetails/>}/>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="*" element={<Page404/>}/>
                  </Routes>
            <div>
                <Footer></Footer>
            </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRoute;