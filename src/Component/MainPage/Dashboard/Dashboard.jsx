import React, { useState } from 'react'
import './Dashboard.css'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { GiWallet, GiHamburgerMenu } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import { FaBook, FaCommentDots, FaShoppingBag, FaUsers, FaUtensils } from 'react-icons/fa';
import { BsFillHouseDoorFill, BsFillCalendarWeekFill, BsCalendar2CheckFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { AiOutlineBars, AiOutlineMenu } from 'react-icons/ai';

const Dashboard = () => {
    const location = useLocation();
    const local = location.pathname;
    const splitLocation = local.split("/")[2] 
    // console.log(splitLocation)
   const [toggle, setToggle] = useState(false);
   const [active, setActive] = useState(splitLocation);

   //// todo Load data from the server to have dynamic  isAdmin based on Data
   const isAdmin = true;

    return (
    <>
      <div className='p-5 lg:hidden block bg-[#000000a6]'>
        <div className='flex justify-between items-center'>
            <div className="">
                <h2 className="text-white font-black lg:text-[28px] text-[20px]">BISTRO BOSS</h2>
                <h4 className="text-white font-bold lg:text-[20px] text-[16px] tracking-[0.38em]">Restaurant</h4>
            </div>
            <div className=""> 
                <AiOutlineMenu onClick={() => setToggle(!toggle) } className='text-white z-30 text-[24px]' />
            </div>
        </div>
      </div>

        <div className='dashboard'>
            <div className="flex justify-center ">
                <div className={`lg:w-[20%] w-[70%] h-[100vh] bg-[#D1A054] px-6 py-11 ${toggle ? "sidebar active" : "sidebar"}`}>
                   <div className='lg:mb-9 mb-8'>
                      <h2 className="text-[#151515] font-black lg:text-[24px] text-[20px]">BISTRO BOSS</h2>
                      <h4 className="text-[#151515] font-bold text-[16px] tracking-[0.38em]">Restaurant</h4>
                   </div>
                   <div className='dashboard_menu'>
                       <ul>

                        {
                            isAdmin ? <>
                            
                                <li onClick={() => setActive("Admin")}><Link to="/dashboard/adminHome" className={`flex items-center ${active === "Admin" ? "active" : ""}`}><BsFillHouseDoorFill /> <h2 className='ml-3'>Admin Home</h2></Link></li>

                                <li onClick={() => setActive("items")}><Link to="/dashboard/addItems" className={`flex items-center ${active === "items" ? "active" : ""}`}><FaUtensils /> <h2 className='ml-3'>add items</h2></Link></li>

                                <li onClick={() => setActive("manage")}><Link to="/dashboard/manageItems" className={`flex items-center ${active === "manage" ? "active" : ""}`}><AiOutlineBars /> <h2 className='ml-3'>manage items</h2></Link></li>

                                <li onClick={() => setActive("bookings")}><Link to="/dashboard/Bookings" className={`flex items-center ${active === "bookings" ? "active" : ""}`}><FaBook /> <h2 className='ml-3'>Manage bookings</h2></Link></li>

                                <li onClick={() => setActive("users")}><Link to="/dashboard/allUsers" className={`flex items-center ${active === "users" ? "active" : ""}`}><FaUsers /> <h2 className='ml-3'>all users</h2></Link></li>

                            </> : 
                            <>
                                <li onClick={() => setActive("home")}><Link className={`flex items-center ${active === "home" ? "active" : ""}`}><BsFillHouseDoorFill /> <h2 className='ml-3'>User Home</h2></Link></li>

                                <li onClick={() => setActive("reservation")}><Link className={`flex items-center ${active === "reservation" ? "active" : ""}`}><BsFillCalendarWeekFill /> <h2 className='ml-3'>reservation</h2></Link></li>

                                <li onClick={() => setActive("payment")}><Link to="/dashboard/payment" className={`flex items-center ${active === "payment" ? "active" : ""}`}><GiWallet /> <h2 className='ml-3'>payment history</h2></Link></li>

                                <li onClick={() => setActive("myCart")}><Link to="/dashboard/myCart" className={`flex items-center ${active === "myCart" ? "active" : ""}`}><HiShoppingCart /> <h2 className='ml-3'>my cart</h2></Link></li>

                                <li onClick={() => setActive("review")}><Link to="/dashboard/addReview" className={`flex items-center ${active === "review" ? "active" : ""}`}><FaCommentDots /> <h2 className='ml-3'>add review</h2></Link></li>

                                <li onClick={() => setActive("booking")}><Link to="/dashboard/myBooking" className={`flex items-center ${active === "booking" ? "active" : ""}`}><BsCalendar2CheckFill /> <h2 className='ml-3'>my booking</h2></Link></li>  
                            </>
                        }

                       </ul>

                         <div className="w-full bg-[#FFF] h-[1px] my-5"></div>

                         <ul>
                           <li><Link to="/" className='flex items-center'><BsFillHouseDoorFill /> <h2 className='ml-3'>Home</h2></Link></li>

                           <li><Link to="/menu" className='flex items-center'><GiHamburgerMenu /> <h2 className='ml-3'>Menu</h2></Link></li>

                           <li><Link to="/shop/salad" className='flex items-center'><FaShoppingBag /> <h2 className='ml-3'>Shop </h2></Link></li>

                           <li><Link to="/contact" className='flex items-center'><BsFillEnvelopeFill /> <h2 className='ml-3'>Contact</h2></Link></li>
                    
                       </ul>
                   </div>
                </div>

                <div className='lg:w-[80%] w-full ml-auto'>
                   <Outlet />
                </div>
            </div>
        </div>
     </>
    );
};

export default Dashboard;