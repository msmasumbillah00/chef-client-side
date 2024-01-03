import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";

const Register = () => {
    const [err, setErr] = useState("")

    const { createUserWithEmailPAss, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handelCreateNewUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        // const name = form.name.value;
        // const photo = form.photo.value;
        if (pass.length < 6) {
            setErr("Passwords must be at least 6 characters");
            return;
        }
        if (!/[A-Z]/.test(pass)) {
            setErr("Password Must Have one Upper Latter");
            return
        }
        if (!/\d/.test(pass)) {
            setErr("Password Must Have One Number");
            return
        }
        createUserWithEmailPAss(email, pass)
            .then(result => {
                setUser(result.user)
                navigate("/")
                setErr("")
                form.reset();


            })
            .catch(error => {
                setErr(error.message)
                console.log(error.message)
            });


    }

    // const handelUpdateProfileDetails = () => {
    //     const form = document.getElementById("frm")
    //     const name = form.name.value;
    //     const photo = form.photo.value;
    //     updateProfileDetails(name, photo)
    //         .then(() => {
    //             console.log(user)
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         });
    // }

    return (
        <div className="container mx-auto mt-20">
            <div className=" min-h-screen ">
                <div className="hero-content flex-col  mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl text-black font-bold my-5">Create Account</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form id="frm" onSubmit={handelCreateNewUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="pass" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <small>Already have an account?</small> <Link to="/login" className="label-text-alt link link-hover">Sing In </Link>
                                </label>
                            </div>
                            <p className="text-red-600">{err}</p>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary text-700 text-gray-50">Sing Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;