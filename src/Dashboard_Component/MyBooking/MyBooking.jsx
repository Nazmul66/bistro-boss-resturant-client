import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import ChangeTitle from '../../WebsiteTitle/WebsiteTitle';

const MyBooking = () => {
      ChangeTitle("Dashboard/MyBooking");

    // const handleDelete = (id) =>{
    //     // console.log("hello", id)
    //     Swal.fire({
    //         title: 'Are you sure? Do you want to delete',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:4000/carts/${id}`,{
    //                 method: "DELETE"
    //             })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data)
    //                 if(data.deletedCount > 0){
    //                     refetch();
    //                     Swal.fire(
    //                         'Deleted!',
    //                         'Your item has been deleted.',
    //                         'success'
    //                         )
    //                 }
    //             })
    //         }
    //       })
    // }

    // const total = cart.reduce(( sum, item ) => item.price + sum, 0)

    return (
        <div className='py-10 px-5 bg-[#F6F6F6]'>
         <div className='max-w-[850px] mx-auto'>
           <SectionTitle heading="---Excellent Ambience---" subHeading="MY BOOKINGS"></SectionTitle>
             <div className='bg-[#FFF] p-[30px]'>
                 <div className='flex lg:flex-row flex-col justify-between items-center mb-7'>
                    <h2 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>Total Bookings: 0</h2>
                    <h4 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>total price: $0</h4>
                     <button className='bg-[#D1A054] rounded-lg px-2 py-2 text-[#FFF]'>PAY</button>
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
                     {/* {
                         cart.map((items, index) =><tr key={index} className='border-b-[1px] border-[#e8e8e8]'>
                             <td className='p-4 whitespace-nowrap'>{index + 1}</td>
                             <td className='p-4 whitespace-nowrap'>
                               <img src={items.image} alt="" className='w-[70px] mx-auto' />
                             </td>
                             <td className='text-[#737373] p-4 whitespace-nowrap'>{items.name}</td>
                             <td className='text-[#737373] p-4 whitespace-nowrap'>${items.price}</td>
                             <td className='p-4 whitespace-nowrap'><button onClick={()=> handleDelete(items._id) } className="bg-[#B91C1C] text-[#FFF] px-4 py-3 rounded-[5px]"><RiDeleteBin6Line /></button></td>
                         </tr>)
                     } */}
                     </tbody>
                         
                      </table>
                     </div>
             </div>
         </div>
        </div>
    );
};

export default MyBooking;