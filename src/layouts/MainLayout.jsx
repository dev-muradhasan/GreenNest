import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyContainer from "../components/MyContainer";


const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar></Navbar>
            </header>
            <MyContainer className="flex-1">
                <Outlet></Outlet>
            </MyContainer>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;