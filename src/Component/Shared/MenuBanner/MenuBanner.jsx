
const MenuBanner = ({ img, menuTitle }) => {
    return (
        <div className='py-[90px] px-5' style={{ backgroundImage: `url("${img}")`, backgroundPosition: "center top", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className='max-w-[1140px] mx-auto'>
           <div className='max-w-[900px] mx-auto lg:py-[140px] py-[70px]' style={{background: "rgba(21, 21, 21, 0.6)"}}>
               <h2 className='font-normal lg:text-[40px] text-[36px] text-white text-center'>{menuTitle}</h2>
               <p className='font-normal lg:text-[16px] lg:px-[100px] px-4 text-[14px] leading-7 text-white text-center'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
        </div>
   </div>
    );
};

export default MenuBanner;