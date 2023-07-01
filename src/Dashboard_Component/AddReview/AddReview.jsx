
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import ChangeTitle from '../../WebsiteTitle/WebsiteTitle';

const AddReview = () => {
    ChangeTitle("Dashboard/Reviews");

    return (
        <div className='py-10 px-5'>
           <div className='max-w-[850px] mx-auto'>
              <SectionTitle heading="---Sharing is Caring!!!---" subHeading="GIVE A REVIEW..."></SectionTitle>

                <div className='bg-[#F6F6F6] py-[40px] px-[100px]'>
                    <h2 className='text-center text-[#151515] font-black text-[32px]'>Rate US!</h2>
                         <Rating
                               className='mx-auto mb-16'
                                style={{ maxWidth: 180 }}
                                value={0}
                                readOnly
                            />

                    <form action="">
                          <div className='mb-7'>
                                <label htmlFor="" className='font-semibold text-[16px] mb-4 block text-[#444]'>Which recipe you liked most?</label>
                                <input type="text" name="email" placeholder='Recipe you liked most'  className='block w-full outline-none  py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]'  />
                         </div>
                         <div className='mb-7'>
                                <label htmlFor="" className='font-semibold text-[16px] mb-4 block text-[#444]'>Do you have any suggestion for us?</label>
                                <input type="text" name="email" placeholder='Sugggestion'  className='block w-full outline-none py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]'  />
                         </div>
                         <div className='mb-7'>
                                <label htmlFor="" className='font-semibold text-[16px] mb-4 block text-[#444]'>Kindly express your care in a short way.</label>
                                <textarea type="text" name="email" placeholder='Review in detail'  className='block w-full h-[260px] outline-none py-4 rounded-lg px-5 text-[16px] font-normal text-[#000] resize-none'></textarea>
                         </div>

                         <button className="flex items-center font-bold text-[16px] text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-6 py-2">Send Review <BsFillRocketTakeoffFill className='ml-3' /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;