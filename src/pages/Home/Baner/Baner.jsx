



const Baner = () => {

    return (
        <div className="hero baner min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" mx-auto  text-neutral-content">
                <div className=" max-w-screen-sm p-10 ">
                    <h1 className="mb-5 text-gray-100 text-5xl  font-bold"><span className=" text-6xl lg:text-7xl text-yellow-300">Unleash</span> Culinary Excellence with <span className=" text-6xl lg:text-7xl text-yellow-300">KitchenMaestro</span></h1>
                    <p className="mb-5 text-white">KitchenMaestro invites you to a realm of gourmet pleasures. Elevate your home cooking experience with curated recipes, expert insights, and a supportive community.</p>
                    <button className="btn btn-warning btn-outline px-14">Explore More </button>
                </div>
            </div>
        </div>
    );
};

export default Baner;