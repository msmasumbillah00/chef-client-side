import { Outlet } from "react-router-dom";
import Footer from './../../component/Footer/Footer';
import Header from "../../component/Header/Header";

const Main = () => {
    return (
        <div className="d-flex">
            <Header></Header>
            <Outlet></Outlet>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;