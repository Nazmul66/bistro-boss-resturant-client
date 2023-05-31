import React from 'react';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import ChangeTitle from '../../WebsiteTitle/WebsiteTitle';
import useCart from '../../CustomLoader/useCart';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

const ManageItems = () => {
    ChangeTitle("Dashboard/Manage Items");
    const [cart] = useCart();

    return (
        <div className='py-10 px-5 bg-[#F6F6F6]'>
        <div className='max-w-[850px] mx-auto'>
          <SectionTitle heading="---Hurry Up!---" subHeading="MANAGE ALL ITEMS"></SectionTitle>
          <div className='bg-[#FFF] p-[30px]'>
              <div className='flex items-center mb-7'>
                 <h2 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>Total Payments:  {cart?.length}</h2>
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
                          <th className='p-4 whitespace-nowrap text-[14px]'>ACTION</th>
                      </tr>
                  </thead>
                  <tbody>
                  {/* row 1 */}
                  {
                      cart.map((items, index) =><tr key={index} className='border-b-[1px] border-[#e8e8e8]'>
                          <td className='p-4 whitespace-nowrap'>{index + 1}</td>
                          <td className='p-4 whitespace-nowrap'>
                            <img src={items.image} alt="" className='w-[70px] mx-auto' />
                          </td>
                          <td className='text-[#737373] p-4 whitespace-nowrap'>{items.name}</td>
                          <td className='text-[#737373] p-4 whitespace-nowrap'>${items.price}</td>
                          <td className='p-4 whitespace-nowrap'><button className="bg-[#D1A054] text-[#FFF] px-4 py-3 rounded-[5px]"><BiEdit /></button></td>
                          <td className='p-4 whitespace-nowrap'><button onClick={()=> handleDelete(items._id) } className="bg-[#B91C1C] text-[#FFF] px-4 py-3 rounded-[5px]"><RiDeleteBin6Line /></button></td>
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

export default ManageItems;