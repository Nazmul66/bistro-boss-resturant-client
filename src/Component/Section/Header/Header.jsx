import{ useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { HiShoppingCart } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useCart from '../../../CustomLoader/useCart';
import useAdmin from '../../../CustomLoader/useAdmin';

const Header = () => {
    const { userInfo, userOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const [toggle, setToggle] = useState(false);

    const handleLogOut = () =>{
        userOut()
        .then(() =>{
            console.log("successful logout");
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <header className='py-5 lg:px-0 px-5'>
        <div className='max-w-[1140px] mx-auto '>
            <div className='flex justify-between items-center'>
                <div className='lg:w-[25%] w-[50%]'>
                    <h2 className='text-white font-black lg:text-[28px] text-[20px]'>BISTRO BOSS</h2>
                    <h4 className='text-white font-bold lg:text-[20px] text-[16px] tracking-[0.38em]'>Restaurant</h4>
                </div>
                
                <nav className={`w-[75%] flex lg:flex-row flex-col lg:justify-end justify-center items-center ${toggle ? "navbar active" : "navbar" }`} >
                    <div className='menubar'>
                        <ul className='flex lg:flex-row flex-col items-center'>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/contact">CONTACT US</Link></li>
                            {
                              isAdmin ? <li><Link to="/dashboard/adminHome">DASHBOARD</Link></li> :
                                        <li><Link to="/dashboard/userHome">DASHBOARD</Link></li>
                            }
                            <li><Link to="/menu">OUR MENU</Link></li>
                            <li><Link to="/shop/salad">OUR SHOP</Link></li>
                            <li>
                               <Link to="/dashboard/myCart" className='w-[40px] h-[40px] bg-[#006837] flex justify-center items-center rounded-full relative mr-4'>
                                  <HiShoppingCart className='text-[#FFF] text-[20px]' /> 
                                  <span className='text-[#FFF] bg-yellow-500 text-[14px] px-[6px] absolute rounded-full -top-3 -right-1'>{cart?.length || 0}</span>
                               </Link>
                            </li>
                            {
                                userInfo ? <li><button onClick={ handleLogOut } className='font-medium text-[#FFF] text-sm'>LOGOUT</button></li> :
                                <li><Link to="/login">LOGIN</Link></li>
                            }
                        </ul>
                    </div>
                </nav>
                   {
                      toggle ? <RxCross2 onClick={() => setToggle(!toggle) } className='lg:hidden block text-[30px] z-40 text-yellow-500' /> :
                      <HiMenuAlt3 onClick={() => setToggle(!toggle) } className='lg:hidden block text-[30px] z-40 text-yellow-500' />
                   }
            </div>
        </div>
    </header>
    );
};

export default Header;