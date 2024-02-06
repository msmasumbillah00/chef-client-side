import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user, updateProfileDetails, resetPassword } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfileDetails(name, photoUrl)
        setName("");
        setPhotoUrl("");
    }


    return (
        <div className="container mx-auto">
            <div className="flex justify-center mx-auto w-7/12 items-center h-screen">
                <div className="bg-gray-800 w-full rounded-lg p-4 max-w-xs">
                    <div className="relative">
                        <img src={user.photoURL} alt="Profile" className=" w-48 h-48 rounded-full border-4 border-white mx-auto" />
                        <i className="absolute top-0 right-0 text-gray-300 text-2xl fas fa-info-circle"></i>
                    </div>

                    <div className="text-center mt-4">
                        <h3 className="text-white text-lg font-semibold">{user.displayName}</h3>
                        <p className="text-gray-400">N/A</p>
                        <p className="text-gray-400">{user.email}</p>
                        <p className="text-gray-400">+601147150237</p>
                    </div>

                    <div className="mt-4">
                        <div className="bg-gray-600 h-4 rounded-full">
                            <div className="bg-green-500 h-4 rounded-full" style={{ width: "71%" }}></div>
                        </div>
                        <p className="text-center text-gray-400 mt-1">71%</p>
                    </div>
                    <div className="mt-4  ">
                        <button onClick={openModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Update Profile
                        </button> <br /> <br />
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            <Link to="/forgetPass">  Reset Password</Link>
                        </button>
                    </div>
                    <div>
                        {isOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white p-4 w-96">
                                    <h2 className="text-2xl my-8">Update your Name And Photo </h2>
                                    <div>
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="name">Name</label> <br />
                                                <input className=" bg-white border px-3" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div>
                                                <label htmlFor="photoUrl">Photo URL</label> <br />
                                                <input className="bg-white border px-3" type="text" id="photoUrl" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
                                            </div>
                                            <button className="btn btn-sm btn-outline my-5">Submit</button>
                                        </form>
                                    </div>
                                    <button className="ms-auto flex" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;