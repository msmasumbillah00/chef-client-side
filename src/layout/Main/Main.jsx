import { Outlet, useNavigation } from "react-router-dom";
import Footer from './../../component/Footer/Footer';
import Header from "../../component/Header/Header";
import Loading from "../../component/Loading/Loading";

const Main = () => {
    const navigation = useNavigation();

    return (
        <div className="d-flex">
            <Header></Header>
            {
                navigation.state === "loading" ? <Loading></Loading> : <Outlet></Outlet>
            }

            <div className="bg-base-200">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;