import Baner from "./Baner/Baner";
import Chef from "./Chef/Chef";
import FeaturedRecipes from "./FeaturedRecipes/FeaturedRecipes";

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Chef></Chef>
            <FeaturedRecipes></FeaturedRecipes>
        </div>
    );
};

export default Home;