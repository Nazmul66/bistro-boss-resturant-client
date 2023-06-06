// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import './AdminHome.css'
import { GiWallet } from "react-icons/gi";
import { SiCodechef } from 'react-icons/si';
import useAxiosSecure from "../../CustomLoader/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTruck, FaUsers } from 'react-icons/fa';

const AdminHome = () => { 
    // const [userInfo] = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: stats = {} } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () =>{
            const res = await axiosSecure.get("/admin-stats")
            return res.data;
        }
    })

    return (
        <div className="bg-white py-10">
           <div className=" max-w-[95%] mx-auto">
              <h2 className="text-[30px] text-[#151515] mb-7">Hi, Welcome Back!</h2>

              <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">

                  <div className="flex justify-center items-center difColor-1 ">
                      <GiWallet className='text-white text-[36px] ' />
                      <div className="ml-3">
                          <h1 className='text-white font-extrabold text-[30px]'>{stats.revenue}</h1>
                          <p className='text-white text-[20px]'>Revenue</p>
                      </div>
                  </div>

                  <div className="flex justify-center items-center difColor-2">
                      <FaUsers className='text-white text-[36px] ' />
                      <div className="ml-3">
                          <h1 className='text-white font-extrabold text-[30px]'>{stats.users}</h1>
                          <p className='text-white text-[20px]'>Customers</p>
                      </div>
                  </div>

                  <div className="flex justify-center items-center difColor-3">
                      <SiCodechef className='text-white text-[36px] ' />
                      <div className="ml-3">
                          <h1 className='text-white font-extrabold text-[30px]'>{stats.products}</h1>
                          <p className='text-white text-[20px]'>products</p>
                      </div>
                  </div>

                  <div className="flex justify-center items-center difColor-4">
                      <FaTruck className='text-white text-[36px] ' />
                      <div className="ml-3">
                          <h1 className='text-white font-extrabold text-[30px]'>{stats.orders}</h1>
                          <p className='text-white text-[20px]'>orders</p>
                      </div>
                  </div>

              </div>
           </div>
        </div>
    );
};

export default AdminHome;