
import Banner from '../../Section/Banner/Banner';
import Category from '../../Section/Category/Category';
import About from '../../Section/About/About';
import Menu from '../../Section/Menu/Menu';
import Contact from '../../Section/Contact/Contact';
import AnotherMenu from '../../Section/AnotherMenu/AnotherMenu';
import Testimonial from '../../Section/Testimonial/Testimonial';
import ChangeTitle from '../../../WebsiteTitle/WebsiteTitle';

const Home = () => {
    ChangeTitle("Home");
    
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Menu></Menu>
            <Contact></Contact>
            <AnotherMenu></AnotherMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;