import React, { useContext, useState } from 'react';
import './RegisterPage.css'
import { Link, useNavigate } from 'react-router-dom';
import authImg from '../../../../public/assets/others/authentication2.png'
import { FaGithub, FaFacebookF } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import ChangeTitle from '../../../WebsiteTitle/WebsiteTitle';
import Swal from 'sweetalert2';

const RegisterPage = () => {
    ChangeTitle("Sign Up");
    const { createUserInfo, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleRegister = (event) =>{
         event.preventDefault();
         const name = event.target.name.value;
         const email = event.target.email.value;
         const pass = event.target.password.value;
        //  console.log(name, email, pass)

         if(email === "" || pass === "" || name === "" ){
            return setError("!!! Please fill up empty form box !!!");
         }
         else if(pass.length < 6){
            return setError("!!! AtLeast use 6 character password !!!");
         }
         else if(!/(?=.*?[A-Z])/.test(pass)){
             return setError("!!! AtLeast use one UpperCase !!!");
         }
         else if(!/(?=.*[0-9])/.test(pass)){
            return setError("!!! AtLeast use one number !!!");
        }
         else if(!/(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-])/.test(pass)){
            return setError("!!! AtLeast use one special character !!!");
        }

        createUserInfo(email, pass)
        .then(result =>{
            const users = result.user;
            console.log(users)

            // update users display name
            updateProfile(result.user, {
                displayName: name
            })
            .then(() =>{
                const saveUser = { name: name, email: email }
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
                        event.target.reset();
                        Swal.fire({
                            title: 'Successful Login',
                            showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                            }
                        })                
                      navigate("/login");
                    }
                })
             })
             
             .catch(error =>{
                setError(error.message);
             })
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    // Google login
    const handleGoogle = () =>{
    googleSignIn()
    .then(result =>{
        const googleUser = result.user;
        console.log(googleUser)
        navigate(from, { replace : true })
    })
    .catch(error =>{
        setError(error.message)
    })
    }

    return (
        <div className='pt-40 lg:pb-40 pb-20 lg:px-0 px-6 login_form'>
          <div className="max-w-[1140px] mx-auto lg:pt-0 pt-12 flex lg:flex-row flex-col-reverse justify-between items-center containers">

              <div className="lg:p-11 p-5 lg:w-1/2 w-full">
                     <h3 className='text-[#444] text-center text-[40px] font-semibold mb-14'>Sign Up</h3>

                   <form action="" onSubmit={ handleRegister } >
                        <div className='mb-7'>
                             <label htmlFor="" className='font-semibold text-[20px] mb-4 block text-[#444]'>Name</label>
                             <input type="text" name="name" placeholder='Your Name'  className='block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]'  />
                         </div>

                         <div className='mb-7'>
                             <label htmlFor="" className='font-semibold text-[20px] mb-4 block text-[#444]'>Email</label>
                             <input type="email" name="email" placeholder='Your Email Address'  className='block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]'  />
                         </div>

                         <div className='mb-5'>
                             <label htmlFor="" className='font-semibold text-[20px] mb-4 block text-[#444]'>Password</label>
                             <input type="password" name="password" placeholder='Enter Your Password' className='block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]' />
                         </div>
                         
                         <p className='text-[16px] text-red-500 font-bold text-center'>{error}</p>

                         <div className='text-center mb-7 mt-7'>
                             <button className="rounded-md text-white font-semibold py-[12px] px-[40px] bg-[#DBB984] text-[18px] block w-full">Sign Up</button>
                         </div>

                         <span className='font-semibold block text-[#DBB984] text-[18px] text-center mb-5'>Already registered? <Link to="/login" className='font-extrabold cursor-pointer'>Go to log in</Link></span>

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

             <div className='image lg:w-1/2 w-full'>
                 <img src={authImg} alt="" />
             </div>

       </div>
     </div>
    );
};

export default RegisterPage;