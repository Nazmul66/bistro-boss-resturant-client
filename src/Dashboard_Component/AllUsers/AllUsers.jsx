import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ChangeTitle from '../../WebsiteTitle/WebsiteTitle';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import { FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../CustomLoader/useAxiosSecure';

const AllUsers = () => {
    ChangeTitle("Dashboard/AllUsers");
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    ///
    const handleMakeAdmin = (items) =>{
        // console.log( id)
        // TODO problem
        fetch(`http://localhost:4000/users/admin/${items._id}`, {
            method: "PATCH",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${items?.name} is an admin`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    
    ////
    const handleDelete = (items) =>{
    // console.log("hello", items._id)
        Swal.fire({
            title: 'Are you sure? Do you want to delete',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/users/${items._id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch();
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
}

    return (
        <div className='py-10 px-5 bg-[#F6F6F6]'>
          <div className='max-w-[850px] mx-auto'>
            <SectionTitle heading="---How many??---" subHeading="MANAGE ALL USERS"></SectionTitle>
            <div className='bg-[#FFF] p-[30px]'>
                <div className='flex items-center mb-7'>
                   <h2 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>Total users: {users?.length}</h2>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="w-full">
                        {/* head */}
                    <thead>
                        <tr className='text-center bg-[#D1A054] text-[#FFF] font-semibold'>
                            <th className='p-4 whitespace-nowrap text-[14px]'>No.</th>
                            <th className='p-4 whitespace-nowrap text-[14px]'>NAME</th>
                            <th className='p-4 whitespace-nowrap text-[14px]'>EMAIL</th>
                            <th className='p-4 whitespace-nowrap text-[14px]'>ROLE</th>
                            <th className='p-4 whitespace-nowrap text-[14px]'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        users.map((items, index) =><tr key={index} className='border-b-[1px] border-[#e8e8e8]'>
                            <td className='text-center p-4 whitespace-nowrap'>{index + 1}</td>
                            <td className='text-center p-4 whitespace-nowrap text-[#737373]'>
                              {items.name}
                            </td>
                            <td className='text-center text-[#737373] p-4 whitespace-nowrap'>{items.email}</td>
                            <td className='text-center text-[#737373] p-4 whitespace-nowrap'>
                                {
                                    items.role === "admin" ? "admin" : 
                                    <button onClick={()=> handleMakeAdmin(items) } className="bg-[#D1A054] text-[#FFF] px-4 py-3 rounded-[5px]"><FaUserShield  /></button>
                                }
                            </td>
                            <td className='text-center p-4 whitespace-nowrap'>
                                <button onClick={()=> handleDelete(items) } className="bg-[#B91C1C] text-[#FFF] px-4 py-3 rounded-[5px]"><RiDeleteBin6Line /></button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                        
                     </table>
                    </div>
             </div>
          </div>
       </div>
    );
};

export default AllUsers;