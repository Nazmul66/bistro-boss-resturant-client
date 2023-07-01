
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center max-w-[400px] mx-auto'>
            <h3 className='text-[#D99904] text-[16px] leading-6 italic mb-3'>{heading}</h3>
            <h1 className='text-[32px] text-[#151515] leading-10 border-y-4 border-[#E8E8E8] py-4 mb-16'>{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;