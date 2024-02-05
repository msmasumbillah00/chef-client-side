import { useContext, useEffect, useState } from "react";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import { signOut } from "firebase/auth";
import ActiveLink from "../ActiveLink/ActiveLink";
import { FaShoppingCart } from "react-icons/fa";


const NAvigation = () => {
    const { user, auth } = useContext(UserContext);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsNavOpen(false);
        });
    }, [])

    const handelLogOut = () => {
        signOut(auth)
            .then(() => {
                alert("You have been logged out")
                navigate("/login");
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="bg-neutral">
            <div className="navbar container sticky top-0 mx-auto">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">KitchenMaestro</Link>
                </div>
                <div>
                    <button
                        className="md:hidden  text-white focus:outline-none"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className={`md:flex ${isNavOpen ? 'flex' : 'hidden'} bg-neutral z-50 flex-col items-center absolute left-0  ${!isNavOpen ? 'tor-0' : 'top-16'}  p-4 md:static   md:flex-row space-y-2 md:space-y-0 md:space-x-4`}>
                        <ActiveLink to="/" className="text-white btn-ghost px-5">Home</ActiveLink>
                        <ActiveLink to="/about" className="text-white btn-ghost px-5">About</ActiveLink>
                        <ActiveLink to="/services" className="text-white btn-ghost px-5">Services</ActiveLink>
                        <ActiveLink to="contact" className="text-white btn-ghost px-5">Contact</ActiveLink>
                        <ActiveLink to="blog" className="text-white btn-ghost px-5">Blog</ActiveLink>
                        <ActiveLink to="cart" className="text-white btn-ghost px-5"><FaShoppingCart /></ActiveLink>
                    </div>
                </div>
                <div className="flex-none">
                    {
                        !user ? <Link to="login"><LuLogIn className="text-3xl ms-3" /></Link> :
                            <div className="dd hover:block dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL || `https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm rounded dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                                    <li>
                                        <Link to="profile" className="justify-between">
                                            {
                                                user?.displayName || "Profile"
                                            }
                                        </Link>
                                    </li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li onClick={handelLogOut}><a>Logout <LuLogOut className="ms-auto"></LuLogOut></a> </li>
                                </ul>
                            </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default NAvigation;