
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import ChangeTitle from '../../WebsiteTitle/WebsiteTitle';
import { FaUtensils } from 'react-icons/fa';
import useAxiosSecure from '../../CustomLoader/useAxiosSecure';
import Swal from 'sweetalert2';

const Add_item = () => {
    const [axiosSecure] = useAxiosSecure();
    ChangeTitle("Dashboard/Add-item");

    const handleAddCart = (event) =>{
       event.preventDefault();
       const name             = event.target.name.value;
       const category         = event.target.category.value;
       const price            = event.target.price.value;
       const Recipe_Details   = event.target.details.value;
       const image            = event.target.image.files[0];

       const formItem = {name, category, price, Recipe_Details, image }

        // image upload file
       const formData = new FormData();
       formData.append("image", image)

       const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

       fetch(url, {
        method: "POST",
        body: formData,
       })
       .then(res => res.json())
       .then(imageData => {
          if(imageData.success){
            const imageURL = imageData.data.display_url;
            const { name, category, price, Recipe_Details } = formItem;
            const newItem = {name, category, price: parseFloat(price), recipe: Recipe_Details, image: imageURL }
            // console.log(newItem)
            axiosSecure.post("/menu", newItem)
            .then(data => {
                console.log(data)
                if(data.data.insertedId){
                    event.target.reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New Item added",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
          }
       })

    }

    return (
        <div className='py-10 px-5 bg-[#FFF]'>
            <div className='max-w-[850px] mx-auto'>
            <SectionTitle heading="---What's new?---" subHeading="ADD AN ITEM"></SectionTitle>

                   <div className='px-[40px] py-16 bg-[#F6F6F6]'>
                       <form action='' onSubmit={ handleAddCart }>
                            <div className='mb-7'>
                                <label htmlFor="" className='font-semibold text-[16px] mb-4 block text-[#444]'>Recipe name*</label>
                                <input type="text" name="name" placeholder='Recipe name' required="required" className='block w-full outline-none  py-4 rounded-lg px-5 text-[16px] font-normal text-[#444]' />
                            </div>

                            <div className='flex lg:flex-row flex-col gap-5'>
                                <div className='mb-7 lg:w-[50%] w-full'>
                                    <label htmlFor="" className='font-semibold text-[16px] mb-4 block text-[#444]'>Category*</label>
                                    <select name="category" defaultValue="Dessert" className='block w-full outline-none  py-4 rounded-lg px-5 text-[16px] font-normal text-[#444] cursor-pointer' >
                                        <option>dessert</option>
                                        <option>drinks</option>
                                        <option>soup</option>
                                        <option>pizza</option>
                                        <option>salad</option>  
                                    </select>
                                </div>
                                
                                <div className='mb-7 lg:w-[50%] w-full'>
                                    <label htmlFor="" className='font-semibold text-[16px] mb-4 block text-[#444]'>Price*</label>
                                    <input type="text" name="price" placeholder='Price' required="required"  className='block w-full outline-none  py-4 rounded-lg px-5 text-[16px] font-normal text-[#444]' />
                                </div>
                            </div>

                            <div className='mb-7'>
                                <label htmlFor="" className='font-semibold text-[16px] mb-4 block text-[#444]'>Recipe Details*</label>
                                <textarea type="text" name="details" placeholder='Recipe Details' required="required"  className='block w-full outline-none h-[260px] py-4 rounded-lg px-5 text-[16px] font-normal text-[#444]'></textarea>
                            </div>

                            <input type="file" name="image" accept='image/*' required="required" className='file-input file-input-bordered file-input-md w-full max-w-xs mb-7' />

                            <div className=''>
                               <button className="flex items-center font-bold text-[16px] text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-6 py-2">Add Item <FaUtensils className='ml-3' /></button>
                            </div>
                     </form>
                 </div>    

         </div>
     </div>
    );
};

export default Add_item;