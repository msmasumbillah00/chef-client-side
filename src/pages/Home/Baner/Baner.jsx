import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FcLike } from "react-icons/fc";



const Baner = () => {
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
        <div className="baner lg:p-14">
            <div className="baner-title container mx-auto p-5 lg:p-8">
                <h1 className=" text-4xl font-bold text-white md:text-black lg:text-6xl lg:text-right">Fiend The Best Chef Yours Nearby.</h1>
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
                    autoPlaySpeed={2000}
                    showDots={true}
                    customTransition={"transform 400ms ease-in-out"}

                >
                    <div className="card  bg-white md:card-side shadow-xl rounded-xl">
                        <figure className="md:w-1/2 max-h-80">
                            <img className=" w-full " src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" />
                        </figure>
                        <div className="card-body rounded text-black md:w-1/2">
                            <div>
                                <h2 className=" text-2xl lg:text-3xl">New album is released!</h2>
                                <div className=" flex flex-grow-0 items-center"><span className="text-xl font-bold me-1">8</span> Years of experience. &</div>
                                <div><span className="text-xl font-bold me-1">20</span>Numbers of recipes.</div>
                            </div>
                            <div className=" card-footer mt-auto flex justify-between items-center">
                                <div className="liks flex items-center">
                                    <FcLike className="me-1" /> 140
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline  btn-sm text-black">View Recipes!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full bg-white md:card-side shadow-xl rounded-xl">
                        <figure className="md:w-1/2 max-h-80">
                            <img className=" w-full " src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Album" />
                        </figure>
                        <div className="card-body text-black md:w-1/2">
                            <div>
                                <h2 className=" text-2xl lg:text-3xl">New album is released!</h2>
                                <div className=" flex flex-grow-0 items-center"><span className="text-xl font-bold me-1">8</span> Years of experience. &</div>
                                <div><span className="text-xl font-bold me-1">20</span>Numbers of recipes.</div>
                            </div>
                            <div className=" card-footer mt-auto flex justify-between items-center">
                                <div className="liks flex items-center">
                                    <FcLike className="me-1" /> 140
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline  btn-sm text-black">View Recipes!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-white md:card-side shadow-xl rounded-xl">
                        <figure className="md:w-1/2 max-h-80">
                            <img className=" w-full " src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Album" />
                        </figure>
                        <div className="card-body text-black md:w-1/2">
                            <div>
                                <h2 className=" text-2xl lg:text-3xl">New album is released!</h2>
                                <div className=" flex flex-grow-0 items-center"><span className="text-xl font-bold me-1">8</span> Years of experience. &</div>
                                <div><span className="text-xl font-bold me-1">20</span>Numbers of recipes.</div>
                            </div>
                            <div className=" card-footer mt-auto flex justify-between items-center">
                                <div className="liks flex items-center">
                                    <FcLike className="me-1" /> 140
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline  btn-sm text-black">View Recipes!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Baner;