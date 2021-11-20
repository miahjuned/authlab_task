// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import React, { useContext, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from "../../../App.js";
import loginsvg from '../../../Images/Mobile-login-bro.svg';
// import { addToDbUser } from "../../User/UserDatabase";
// import firebaseConfig from "../firebase.config";
import './Signin.css';



// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app();
// }


const Signin = () => {

    const { user, setUser } = useContext(userContext);
    // const googleProvider = new firebase.auth.GoogleAuthProvider();
    // const gitProvider = new firebase.auth.GithubAuthProvider();
    const [customerStatus, setCustomerStatus] = useState(false);
    const [vendorStatus, setVendorStatus] = useState(false);
    const [superAdminStatus, setSuperAdminStatus] = useState(false);
    const [adminStatus, setAdminStatus] = useState(false);
    const [token, setToken] = useState([]);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    // Google sign in
    const handleGoogleLogin = () => {
        // firebase
        //     .auth()
        //     .LoginWithPopup(googleProvider)
        //     .then((result) => {
        //         handleAuthToken();
        //         const googleUser = result.user;
        //         const { displayName, email, photoURL } = googleUser;
        //         handleUser(displayName, email, photoURL, true);
        //         sessionStorage.setItem("user", JSON.stringify(googleUser));
                // sessionStorage.setItem("name", displayName);
                // sessionStorage.setItem("photo", photoURL);
            //     addToDbUser()
            //     handleAuthToken();
            // })
            // .catch((error) => {
            //     handleErrorMessage(error);
            // });
    };

    // Github sign in
    const handleGitLogin = () => {
        // firebase.auth().LoginWithPopup(gitProvider).then((result) => {
        //     const gitUser = result.user;
        //     const { displayName, email, photoURL } = gitUser;
        //     handleUser(displayName, email, photoURL, true);
        //     sessionStorage.setItem("user", JSON.stringify(gitUser));
        //     // sessionStorage.setItem("name", displayName);
        //     // sessionStorage.setItem("photo", photoURL);
        //     handleAuthToken();
        // }).catch((error) => {
        //     handleErrorMessage(error);
        // });
    }

    // handles setting auth token in the session storage
    const handleAuthToken = () => {
        // firebase
        //     .auth()
        //     .currentUser.getIdToken(true)
        //     .then(function (idToken) {
        //         sessionStorage.setItem("token", idToken);
        //         // setToken(idToken)
        //         history.replace(from);
        //     })
        //     .catch(function (error) {
        //         handleErrorMessage(error);
        //     });
    };

    // handles user info
    const handleUser = (name, email, photoURL, whetherLoggedIn) => {
        const newUser = { ...user };
        if (name !== undefined) {
            newUser.name = name;
        }
        if (email !== undefined) {
            newUser.email = email;
        }
        if (photoURL !== undefined) {
            newUser.photoURL = photoURL;
        }
        if (whetherLoggedIn !== undefined) {
            newUser.isLoggedIn = true;
        }
        setUser(newUser);
        handleAuthToken();
    };

    // handles error message
    const handleErrorMessage = (error) => {
        const errorMessage = error.message;
        const newUser = { ...user };
        newUser.error = errorMessage;
        setUser(newUser);
    };


    //////////////Submitting..//////////////
    async function handleSubmit(e) {
        e.preventDefault();

        const userInfo = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        //////////////Customer/////////////
        if (customerStatus) {

            try {

                const userSignUp = `https://mamar-dukan.herokuapp.com/user/login-user`;
                fetch(userSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(async res => await res.json())
                    .then(async user => {
                        // user ? alert(user.message) : alert("failed")
                        if (user.success) {
                            toast.success(user.message, {
                                position: "bottom-right",
                            });
                            e.target.reset();
                            sessionStorage.setItem('user', JSON.stringify(user));
                            setUser(user);
                            // addToDbUser(user)

                            setTimeout(history.replace(from), 8000)
                        }
                        else {
                            toast.error(user.message, {
                                position: "bottom-right",
                            });
                        }

                    })
            }
            catch (e) {
                alert(e)
            }

        }
        ///////////Vendor///////////
        else if (vendorStatus) {

            try {

                const userSignUp = `https://mamar-dukan.herokuapp.com/user/login-vendor`;
                fetch(userSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(async res => await res.json())
                    .then(async user => {
                        if (user.success) {
                            toast.success(user.message, {
                                position: "bottom-right",
                            });
                            e.target.reset();
                            sessionStorage.setItem('user', JSON.stringify(user));
                            setUser(user);
                            history.replace(from);
                        }
                        else {
                            toast.error(user.message, {
                                position: "bottom-right",
                            });
                        }
                    })
            }
            catch (e) {
                alert(e)
            }

        }
        //////////////Admin////////////////////////
        else if (adminStatus) {

            try {

                const userSignUp = `https://mamar-dukan.herokuapp.com/user/login-admin`;
                fetch(userSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(async res => await res.json())
                    .then(async user => {

                        if (user.success) {
                            toast.success(user.message, {
                                position: "bottom-right",
                            });
                            e.target.reset();
                            sessionStorage.setItem('user', JSON.stringify(user));
                            setUser(user);
                            history.replace(from);
                        }
                        else {
                            toast.error(user.message, {
                                position: "bottom-right",
                            });
                        }
                    })
            }
            catch (e) {
                alert(e)
            }

        }

        /////////SuperAdmin////////////
        else if (superAdminStatus) {

            try {

                const userSignUp = `https://mamar-dukan.herokuapp.com/user/login-super-admin`;
                fetch(userSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(async res => await res.json())
                    .then(async user => {
                        if (user.success) {
                            toast.success(user.message, {
                                position: "bottom-right",
                            });
                            e.target.reset();
                            sessionStorage.setItem('user', JSON.stringify(user));
                            setUser(user);
                            history.replace(from);
                        }
                        else {
                            toast.error(user.message, {
                                position: "bottom-right",
                            });
                        }
                    })
            }
            catch (e) {
                alert(e)
            }

        }
        else {
            toast.error("Make sure you have select a role", {
                position: "bottom-right",
            });
        }

    };



    const handleUserChange = () => {
        setVendorStatus(false);
        setCustomerStatus(true);
        setSuperAdminStatus(false);
        setAdminStatus(false);
    }

    const handleVendorChange = () => {
        setCustomerStatus(false);
        setVendorStatus(true);
        setSuperAdminStatus(false);
        setAdminStatus(false);
    }

    const handleAdminChange = () => {
        setCustomerStatus(false);
        setVendorStatus(false);
        setSuperAdminStatus(false);
        setAdminStatus(true);
    }

    const handleSuperAdminChange = () => {
        setCustomerStatus(false);
        setVendorStatus(false);
        setSuperAdminStatus(true);
        setAdminStatus(false);
    }



    return (
        <>
            <div className="bg-white font-open-sans">
                <div className="container mx-auto px-8 py-8 lg:py-24 relative flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
                        <div className="">
                            <div className="login-box2">
                                <h2>Login</h2>
                                <form onSubmit={handleSubmit}>
                                    <div class="user-box text-gray-900 focus:border-gray-900">
                                        <input type="text" name="email" requiblue="" className="text-gray-900 focus:border-gray-900 " />
                                        <label>Email</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="password" name="password" requiblue="" />
                                        <label>Password</label>
                                    </div>
                                    <div className="padding-l-5 flex  justify-between text-sm">
                                        <h1 className="text-gray-700 text-center">I'm</h1>

                                        <div className="">
                                            <input
                                                className="w-6 h-4 cursor-pointer"
                                                onChange={handleUserChange}
                                                type="radio" id="user" name="fav_language" value="user" />
                                            <label className="text-gray-700 text-center border-blue-400 rounded cursor-pointer" for="user">User</label>
                                        </div>
                                        <div className="flex items-center border-l-2 border-blue-400">
                                            <input
                                                className="w-6 h-4 cursor-pointer"
                                                onChange={handleVendorChange}
                                                type="radio" id="vendor" name="fav_language" value="vendor" />
                                            <label className="text-gray-700 text-center" for="vendor">Vendor</label>
                                        </div>
                                        <div className="flex items-center border-l-2 border-blue-400">
                                            <input
                                                className="w-6 h-4 cursor-pointer"
                                                onChange={handleAdminChange}
                                                type="radio" id="admin" name="fav_language" value="admin" />
                                            <label className="text-gray-700 text-center" for="admin">Admin</label>
                                        </div>
                                        <div className="flex items-center border-l-2 border-blue-400">
                                            <input
                                                className="w-6 h-4 cursor-pointer"
                                                onChange={handleSuperAdminChange}
                                                type="radio" id="superAdmin" name="fav_language" value="superAdmin" />
                                            <label className="text-gray-700 text-center" for="superAdmin">Super Admin</label>
                                        </div>
                                    </div>
                                    <label className="submitBtnAnimation">
                                        <span className="btnAnimation"></span>
                                        <span className="btnAnimation"></span>
                                        <span className="btnAnimation"></span>
                                        <span className="btnAnimation"></span>
                                        <button type="submit" value="Submit">Submit</button>
                                    </label>

                                </form>


                                <div className="social-login">
                                    <div className="flex justify-between py-5">
                                        <h4 className="text-white">Don't have an account?</h4>
                                        <Link to="/register" style={{ color: "#000" }}>
                                            Create an account
                                        </Link>
                                    </div>
                                    <button onClick={handleGoogleLogin} className="login-btn">
                                        <div className="flex justify-center items-center">
                                            <h1>Google </h1>
                                            <span>
                                                <FcGoogle />
                                            </span>
                                        </div>
                                    </button>
                                    <button onClick={handleGitLogin} className="login-btn">
                                        <div className="flex justify-center items-center">
                                            <h1>Github </h1>
                                            <span>
                                                <AiFillGithub />
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full sm:w-2/3">
                        <img src={loginsvg} alt="lioigiiin" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Signin;
