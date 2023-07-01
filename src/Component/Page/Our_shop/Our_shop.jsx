import { useState } from 'react';
import './Our_shop.css'
import bgImgs from '../../../../public/assets/shop/banner2.jpg'
import Cover_section from '../../Shared/Cover_section/Cover_section';
import useMenu from '../../../CustomLoader/useMenu';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import { useParams } from 'react-router-dom';
import ChangeTitle from '../../../WebsiteTitle/WebsiteTitle';

const Our_shop = () => {
    ChangeTitle("Our Shop");
    const { category } = useParams();
    const [active, setActive] = useState(category);
    const [menu] = useMenu();
    const allItem = menu.filter(item => item.category == active);

    return (
        <>
            <Cover_section img={bgImgs} headTitle={"OUR SHOP"} headParams={"Would you like to try a dish?"}></ Cover_section>
            
            <div className='py-[130px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='tab_section mb-12'>
                        <ul className='flex justify-center'>
                            <li onClick={() => setActive("salad")}><a className={` ${active === "salad" ? "link actives" : "link" }`}>Salad</a></li>

                            <li onClick={() => setActive("pizza")}><a className={` ${active === "pizza" ? "link actives" : "link" }`}>pizza</a></li>

                            <li onClick={() => setActive("soup")}><a className={` ${active === "soup" ? "link actives" : "link" }`}>soups</a></li>

                            <li onClick={() => setActive("dessert")}><a className={` ${active === "dessert" ? "link actives" : "link" }`}>desserts</a></li>
                            
                            <li onClick={() => setActive("drinks")}><a className={` ${active === "drinks" ? "link actives" : "link" }`}>drinks</a></li>
                        </ul>
                    </div>

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-9'>
                        {
                           allItem.map(items => <ItemCard 
                                  key={items._id}
                                  items={items}
                            ></ItemCard> )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Our_shop;