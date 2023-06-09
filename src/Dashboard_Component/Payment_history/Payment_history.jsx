import React from 'react';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import ChangeTitle from '../../WebsiteTitle/WebsiteTitle';

const Payment_history = () => {
    ChangeTitle("Dashboard/Payment history");

    return (
        <div className='py-10 px-5 bg-[#F6F6F6]'>
          <div className='max-w-[850px] mx-auto'>
            <SectionTitle heading="---At a Glance!---" subHeading="PAYMENT HISTORY"></SectionTitle>
            <div className='bg-[#FFF] p-[30px]'>
                <div className='flex items-center mb-7'>
                   <h2 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>Total Payments:  0</h2>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className=" w-full">
                        {/* head */}
                    <thead>
                        <tr className='text-center bg-[#D1A054] text-[#FFF] font-semibold'>
                            <th className='p-4 whitespace-nowrap text-[14px]'>No.</th>
                            <th className='p-4 whitespace-nowrap text-[14px]'>ITEM IMAGE</th>
                            <th className='p-4 whitespace-nowrap text-[14px]'>ITEM NAME</th>
                            <th className='p-4 whitespace-nowrap text-[14px]'>PRICE</th>
                            <th className='p-4 whitespace-nowrap text-[14px]'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        // cart.map((items, index) =><tr key={index} className='border-b-[1px] border-[#e8e8e8]'>
                        //     <td className='p-4 whitespace-nowrap'>{index + 1}</td>
                        //     <td className='p-4 whitespace-nowrap'>
                        //       <img src={items.image} alt="" className='w-[70px] mx-auto' />
                        //     </td>
                        //     <td className='text-[#737373] p-4 whitespace-nowrap'>{items.name}</td>
                        //     <td className='text-[#737373] p-4 whitespace-nowrap'>${items.price}</td>
                        //     <td className='p-4 whitespace-nowrap'><button onClick={()=> handleDelete(items._id) } className="bg-[#B91C1C] text-[#FFF] px-4 py-3 rounded-[5px]"><RiDeleteBin6Line /></button></td>
                        // </tr>)
                    }
                    </tbody>
                        
                     </table>
                    </div>
            </div>
        </div>
       </div>
    );
};

export default Payment_history;