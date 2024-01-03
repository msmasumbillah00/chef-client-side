import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";


const Login = () => {
    const [error, setError] = useState("");
    const { singInWithGoogle, singInWithGitHub, singInWithEmailPAss, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handelGoogleSingIn = () => {
        setError("")
        singInWithGoogle()
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handelGithubSingIn = () => {
        setError("")
        singInWithGitHub()
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handelEmailPAssSingIn = (e) => {
        e.preventDefault();

        setError("")
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        singInWithEmailPAss(email, pass)
            .then(result => {
                setUser(result.user)
                form.reset();
                navigate("/")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="container mx-auto mt-20">
            <div className=" min-h-screen ">
                <div className="hero-content flex-col  mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl text-black font-bold my-5">Log In</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelEmailPAssSingIn} className="card-body">

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
                                    <small>New to this Website?</small> <Link to="/register" className="label-text-alt link link-hover">Register Here</Link>
                                </label>
                            </div>
                            <p className=" text-red-600">{error}</p>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary text-700 text-gray-50">Sing In</button>
                            </div>

                        </form>
                        <div className="form-control mb-6">
                            <p className="text-center"> Or Sing In With</p>
                            <div className=" flex justify-center mt-3">
                                <button onClick={handelGoogleSingIn} className="btn me-4  btn-circle btn-outline btn-info"><FaGoogle className="text-3xl text-white" /></button>
                                <button onClick={handelGithubSingIn} className="btn  btn-circle btn-outline btn-info"><FaGithub className="text-3xl text-white" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;