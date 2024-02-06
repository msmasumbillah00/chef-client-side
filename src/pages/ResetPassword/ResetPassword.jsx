import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';

const ResetPassword = () => {
    const { resetPassword } = useContext(UserContext);

    const handelResetPass = (e) => {
        e.preventDefault();
        const email = document.getElementById("email-address").value;
        resetPassword(email)
        email.value = '';
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Forgot your password?
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                </div>
                <form onSubmit={handelResetPass} className="mt-8 space-y-6">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-6">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:ring-1 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Go back to login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;