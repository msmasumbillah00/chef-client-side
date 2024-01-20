import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FcLike } from "react-icons/fc";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Chef = () => {
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/chef")
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1124 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1124, min: 664 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 664, min: 0 },
            items: 1
        }
    };
    return (
        <div className=" mt-4 lg:mt-8">
            <div className="container mx-auto p-5 lg:p-8">
                <h1 className=" text-4xl font-bold text-black lg:text-6xl ">Fiend The Best Chef Yours Nearby.</h1>
            </div>
            <div className="container mx-auto p-5 lg:p-10">
                <Carousel
                    responsive={responsive}
                    slidesToSlide={1}
                    draggable={true}
                    swipeable={true}
                    arrows={true}
                    renderArrowsWhenDisabled={false}
                    infinite={true}
                    removeArrowOnDeviceType={["mobile", "tablet"]}
                    minimumTouchDrag={50}
                    sliderClass={""}
                    itemClass={"p-6 my-auto "}
                    dotListClass={""}
                    containerClass={"p-3 "}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    showDots={true}
                    customTransition={"transform 400ms ease-in-out"}

                >
                    {
                        chef.map(c => <div key={c.id}>
                            <div className="card  bg-white md:card-side shadow-xl rounded-xl">
                                <figure className="md:w-1/2 max-h-80">
                                    <img className=" w-full " src={c.photo_url} alt="Album" />
                                </figure>
                                <div className="card-body rounded text-black md:w-1/2">
                                    <div>
                                        <h2 className=" text-3xl font-bold mb-3 lg:text-4xl">{c.name}</h2>
                                        <div className="text-2xl">
                                            <div>Woner of<span className="text-2xl font-bold mx-1">{c.number_of_recipes}</span>recipes from</div>
                                            <div className=" flex flex-grow-0 items-center"><span className="text-2xl font-bold mx-1">{c.years_of_experience}</span> Years of experience.</div>
                                        </div>
                                    </div>
                                    <div className=" card-footer mt-auto flex justify-between items-center">
                                        <div className="liks flex items-center">
                                            <FcLike className="me-1" /> {c.likes}
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-outline  btn-sm text-black"><Link to={`/chef_recipes/${c.id}`}>View Recipes!</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Chef;