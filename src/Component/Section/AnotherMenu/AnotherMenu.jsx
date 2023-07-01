
import './AnotherMenu.css'
import images from '../../../../public//assets//home/featured.jpg';

const AnotherMenu = () => {
    return (
        <div className='anotherMenu py-20 my-12 px-5'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='text-white'>

                    <div className='text-center max-w-[400px] mx-auto'>
                        <h3 className='text-[#D99904] text-[16px] leading-6 italic mb-3'>---Check it out---</h3>
                        <h1 className='text-[32px] text-[#FFF] leading-10 border-y-4 border-[#E8E8E8] py-4 mb-16'>FROM OUR MENU</h1>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col justify-between items-center gap-14'>
                   <div className='lg:w-1/2 w-full'>
                      <img src={images} alt="" />
                   </div>
                   <div className='lg:w-1/2 w-full'>
                      <h5 className='font-normal text-[20px] text-white opacity-60'>March 20, 2023</h5>
                      <h3 className='font-normal text-[20px] text-white opacity-60 mb-3'>WHERE CAN I GET SOME?</h3>
                      <p className='font-normal text-[16px] text-white opacity-80 leading-7 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div className='lg:text-left text-center'>
                            <button className='px-5 py-2 uppercase text-[16px] text-white border-b-[3px] border-[#FFF] rounded-lg'>READ MORE</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default AnotherMenu;