import firebase from "firebase/compat/app";
import "firebase/compat/auth";
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
import {firebaseConfig} from "../../../firebase.config";
import './Signin.css';
import {SigninContainer, SigninCreateAccount, SigninFooter, SigninSocialBtn, SigninForm} from './Signin_CSS.js';
import {FormFieldset, FormLegendTitle, FormInput, FormLegend} from '../../Tab/Feature_Requests/FeatureRequests_CSS.js';
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvide } from "firebase/auth";

import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const Signin = () => {
    const auth = getAuth();
    let history = useHistory();
    let location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    let { from } = location.state || { from: { pathname: "/" } };
    const { user, setUser } = useContext(userContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const gitProvider = new firebase.auth.GithubAuthProvider();


    const handleUserCreate = (data) => {
        const userDetail = { 
            name: data.displayName,
            email: data.email,
            password: '10203040',
            img: data.photoURL
        }
        console.log(userDetail)
        fetch('https://sorting-functionality-authlab.herokuapp.com/user/register-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetail)
        })
        .then(res => res.json())
        .then(user => {
            onSubmit(userDetail)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    // Google sign in
    const handleGoogleLogin = () => {
           signInWithPopup(auth, googleProvider)
             .then((result) => {
                handleUserCreate(result.user);
                // setUser(result.user)
                sessionStorage.setItem("user", JSON.stringify(result.user));
                history.replace(from);
            })
            .catch((error) => {
                toast.warning(error, {
                    position: "bottom-right",
                });
            });
    };

    // Github sign in
    const handleGitLogin = () => {
        signInWithPopup(auth, gitProvider)
        .then((result) => {
            handleUserCreate(result.user);
            // setUser(result.user)
            sessionStorage.setItem("user", JSON.stringify(result.user));
            history.replace(from);
        }).catch((error) => {
            toast.warning(error, {
                position: "bottom-right",
            });
        });
    }


    const onSubmit = (data) => {
        const loginDetail = { 
            email: data.email,
            password: data.password
        }
        fetch('https://sorting-functionality-authlab.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginDetail)
        })
        .then(res => res.json())
        .then(user => {
            
            if(user.success === true){                
                toast.success(user.message, {
                    position: "bottom-right",
                });
                sessionStorage.setItem('user', JSON.stringify(user));
                setUser(user)
                history.replace(from);
            } else {
                toast.error(user.message, {
                    position: "bottom-right",
                });
            }
        })
        .catch(err => {
            toast.error(err, {
                position: "bottom-right",
            });
        }) 
    }


    return (
        <div>
            <SigninContainer>
                <SigninForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormFieldset>
                            <FormLegendTitle>Login</FormLegendTitle>

                            <div>
                                <FormLegend>Email</FormLegend>
                                <FormInput name="email" type="text" placeholder="email" {...register("email", {required: true})}/>
                                <span style={{color:"red"}}>{errors.email?.type === 'required' && "email is required"}</span>
                                
                                <FormLegend>Password</FormLegend>
                                <FormInput name="password" type="password" placeholder="password" {...register("password", {required: true})}/>
                                <span style={{color:"red"}}>{errors.password?.type === 'required' && "password is required"}</span>
                            </div>
                            
                            <label className="submitBtnAnimation">
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <button type="submit" value="Submit">Login</button>
                            </label>

                        </FormFieldset>
                    </form>


                    <SigninFooter>
                        <SigninCreateAccount>
                            <h4>Don't have an account?</h4>
                            <Link to="/register" style={{ color: "#4f46e5" }}>
                                Create an account
                            </Link>
                        </SigninCreateAccount>
                        <SigninSocialBtn onClick={handleGoogleLogin} >
                        <h1>Google </h1>
                            <span>
                                <FcGoogle />
                            </span>
                        </SigninSocialBtn>
                        <SigninSocialBtn onClick={handleGitLogin}>
                        <h1>Github </h1>
                            <span>
                                <AiFillGithub />
                            </span>
                        </SigninSocialBtn>
                    </SigninFooter>
                    <div style={{ margin: '20px', padding:'20px'}}>
                        
                    <strong>Login info</strong>
                        <ol style={{display: 'flex', padding:'20px'}}>
                            <li style={{paddingRight:'20px'}}>
                                <strong>User:</strong>
                                <p >User@gmail.com</p>
                                <p>10203040</p>
                            </li>
                            <li >
                                <strong>Admin:</strong>
                                <p >admin@gmail.com</p>
                                <p>10203040</p>
                            </li>
                        </ol>
                    </div>
                </SigninForm>
                <div>
                    <img src={loginsvg} alt="lioigiiin" />
                </div>
            </SigninContainer>
            <ToastContainer />
        </div>
    );
};

export default Signin;
