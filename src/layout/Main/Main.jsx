import { Outlet } from "react-router-dom";
import Footer from './../../component/Footer/Footer';
import Header from "../../component/Header/Header";

const Main = () => {
    return (
        <div className="d-flex">
            <Header></Header>
            <Outlet></Outlet>
            <div className="bg-base-200">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;