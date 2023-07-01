
import Cover_section from '../../Shared/Cover_section/Cover_section';
import bgImg from '../../../../public/assets/menu/banner3.jpg'
import bgBanner from '../../../../public/assets/home/chef-service.jpg';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
import useMenu from '../../../CustomLoader/useMenu';
import MenuBanner from '../../Shared/MenuBanner/MenuBanner';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ChangeTitle from '../../../WebsiteTitle/WebsiteTitle';

const Our_menu = () => {
    ChangeTitle("Our Menu");
    const [menu] = useMenu();
    const offer = menu.filter(menus => menus.category === "offered")
    const desserts = menu.filter(menus => menus.category === "dessert")
    const pizza = menu.filter(menus => menus.category === "pizza")
    const salad = menu.filter(menus => menus.category === "salad")
    const soup = menu.filter(menus => menus.category === "soup")

    return (
        <div>
             {/* cover banner */}
            <Cover_section img={bgImg} headTitle={"OUR MENU"} headParams={"Would you like to try a dish?"}></Cover_section>

            {/* all offered menu item */}
            <div className='mt-10 -mb-8'>
              <SectionTitle
                heading={"---Don't miss---"}
                subHeading={"TODAY'S OFFER"}
                ></SectionTitle>
            </div>
            <MenuCategory item={offer} ></MenuCategory>

            {/* Deserts menu item */}
            <MenuBanner img={bgBanner} menuTitle={"DESSERTS"} ></MenuBanner>
            <MenuCategory item={desserts} title={"dessert" }></MenuCategory>

             {/* Pizza menu item */}
             <MenuBanner img={bgBanner} menuTitle={"PIZZA"} ></MenuBanner>
            <MenuCategory item={pizza} title={"pizza"} ></MenuCategory>

            {/* Salad menu item */}
            <MenuBanner img={bgBanner} menuTitle={"SALADS"} ></MenuBanner>
            <MenuCategory item={salad} title={"salad"} ></MenuCategory>

            {/* soup menu item */}
            <MenuBanner img={bgBanner} menuTitle={"SOUPS"} ></MenuBanner>
            <MenuCategory item={soup} title={"soup"} ></MenuCategory>

        </div>
    );
};

export default Our_menu;