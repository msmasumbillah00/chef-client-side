import { FaMailBulk } from "react-icons/fa";

const GetInTouch = () => {
    return (
        <div className="container  p-5 mx-auto text-center md:p-10 text-white lg:p-20 bg-slate-400">
            <FaMailBulk className="mx-auto text-7xl" />
            <h1 className=" font-bold uppercase text-2xl"><span className="text-5xl">Subscribe for</span> <br /> Stay Update,s With your Email</h1>
            <div className="my-5" >
                <input className="bg-slate-400 w-4/5 touch-email" type="email" placeholder="Email Adderess" />
            </div>
        </div>
    );
};

export default GetInTouch;