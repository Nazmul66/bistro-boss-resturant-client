import React, { useContext, useEffect, useState } from 'react';
import './LoginPage.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import authImg from '../../../../public/assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { FaGithub, FaFacebookF } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ChangeTitle from '../../../WebsiteTitle/WebsiteTitle';

const LoginPage = () => {
    ChangeTitle("Login");
    const [disable, setDisable] = useState(true)
    const { signInUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");

    const from = location.state?.from?.pathname || "/";

    useEffect(() =>{
        loadCaptchaEnginge(6); 
    },[])

    // login auth
    const handleLogin = (event) =>{
         event.preventDefault();
         const email = event.target.email.value;
         const pass = event.target.password.value;
         console.log(email, pass)

         if(email === "" || pass === ""){
            return setError("!!! Please fill up empty form box !!!");
         }

         signInUser(email, pass)
         .then((result) =>{
            const AllUser = result.user;
            console.log(AllUser);
            navigate(from, { replace : true })
         })

         .catch(error =>{
            setError(error.message)
            setError("Invalid Email or Password doesn't match");
         })
     }

     // Google login
     const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const googleUser = result.user;
            console.log(googleUser)

            /// create login user data storage
            const saveUser = { name: googleUser.displayName, email: googleUser.email }
            fetch("http://localhost:4000/users", {
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){                
                    navigate(from, { replace : true })
                }
            })

        })
        .catch(error =>{
            setError(error.message)
        })
     }

     // captcha validation
     const validationCaptcha = (e) =>{   
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value)

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
     }


    return (
        <div className='pt-40 lg:pb-40 pb-20 lg:px-0 px-6 login_form'>
           <div className="max-w-[1140px] mx-auto lg:pt-0 pt-12 flex lg:flex-row flex-col justify-between items-center containers">
                <div className='image lg:w-1/2 w-full'>
                    <img src={authImg} alt="" />
                </div>

                <div className="lg:p-11 p-5 lg:w-1/2 w-full">
                        <h3 className='text-[#444] text-center text-[40px] font-semibold mb-14'>Login</h3>
                    <form action="" onSubmit={ handleLogin } >
                            <div className='mb-7'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-4 block text-[#444]'>Email</label>
                                <input type="email" name="email" placeholder='Your Email'  className='block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]'  />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="" className='font-semibold text-[20px] mb-4 block text-[#444]'>Password</label>
                                <input type="password" name="password" placeholder='Enter Your Password' className='block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]' />
                            </div>

                            <div className='mb-5'>
                                <div className='mb-5 w-full'>
                                    <LoadCanvasTemplate className="block w-full" />
                                </div>
                                <input type="text" onBlur={ validationCaptcha } name="captcha" placeholder='Type here' className='block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]' />
                            </div>
                            
                            <p className='text-[16px] text-red-500 font-bold text-center'>{error}</p>

                            <div className='text-center mb-7 mt-7'>
                                <button disabled={disable} className="rounded-md text-white font-semibold py-[12px] px-[40px] bg-[#DBB984] text-[18px] block w-full" >Sign In</button>
                            </div>

                            <span className='font-semibold block text-[#DBB984] text-[18px] text-center mb-5'>New here? <Link to="/register" className='font-extrabold cursor-pointer'>Create a New Account</Link></span>

                            <p className='font-medium text-[#444] text-[18px] text-center mb-3'>Or Sign Up with</p>

                            <div className='social-icons text-center mb-6'>
                                <ul className='flex items-center justify-center '>
                                    <li>
                                    <a href=""><FaFacebookF className='icon text-[#444]' /></a>
                                    </li>
                                    <li>
                                    <a href=""><FaGithub className='icon text-[#444]' /></a>
                                    </li>
                                    <li>
                                    <a ><BsGoogle className='icon' onClick={ handleGoogle } /></a>
                                    </li>
                                </ul>
                        </div>
                </form>
                </div>

          </div>
        </div>
    );
};

export default LoginPage;