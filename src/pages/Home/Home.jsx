import Baner from "./Baner/Baner";
import Chef from "./Chef/Chef";
import FeaturedRecipes from "./FeaturedRecipes/FeaturedRecipes";
import GetInTouch from "./GetInTouch/GetInTouch";

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Chef></Chef>
            <FeaturedRecipes></FeaturedRecipes>
            <div className="mx-5">
                <GetInTouch></GetInTouch>
            </div>
        </div>
    );
};

export default Home;