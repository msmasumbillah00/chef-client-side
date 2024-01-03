import { LuLogIn, LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const NAvigation = () => {
    const user = { displayName: "Md Masum Billah" };

    return (
        <div className="bg-neutral">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">KitchenMaestro</a>
                </div>
                <div className="flex-none">
                    {
                        !user ? <Link><LuLogIn className="text-3xl ms-3" /></Link> :
                            <div className="dd hover:block dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm rounded dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                                    <li>
                                        <a className="justify-between">
                                            {
                                                user?.displayName || "Profile"
                                            }
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout <LuLogOut className="ms-auto"></LuLogOut></a> </li>
                                </ul>
                            </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default NAvigation;