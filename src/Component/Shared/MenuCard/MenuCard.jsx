
const MenuCard = ({ menu }) => {
    const {image, name, recipe, price} = menu;
    // console.log(menu)
    return (
        <div className='flex lg:flex-row flex-col justify-between gap-5 flex-grow'>
            <div className='lg:w-[20%] w-full'>
               <img src={image} alt="" className='w-full h-full object-cover lg:rounded-tr-[40px] lg:rounded-br-[50px] lg:rounded-bl-[50px]' />
            </div>
            <div className='lg:w-[65%] w-full'>
                <h2 className='text-[#151515] text-[20px] font-medium leading-[27px] mb-2 lg:text-left text-center'>{name} ------------------</h2>
                <p className='text-[#737373] text-[16px] font-normal lg:text-left text-center'>{recipe}</p>
            </div>
            <div className='lg:w-[15%] w-full'>
               <p className='text-[#BB8506] text-[16px] font-medium text-center'>${price}</p>
            </div>
            
        </div>
    );
};

export default MenuCard;