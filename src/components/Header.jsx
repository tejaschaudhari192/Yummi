import { TbDiscount2 } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { TbHelpOctagon } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { PiShoppingCartBold } from "react-icons/pi";

import logo from './../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { UserContext } from '../utils/UserContext';
import { useContext } from 'react';
import { useSelector } from "react-redux";

function Header() {
    const user = useContext(UserContext);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items)

    return (

        <header className="fixed top-0 left-0 w-full shadow-md h-20 bg-white z-50">
            <div className="header-navbar w-4/5 flex justify-between m-auto items-center py-5">
                <div className="flex items-center gap-12 flex-grow">
                    <Link to="/">
                        <img className="w-8 hover:scale-110 transition-transform" src={logo} alt="Logo" />
                    </Link>
                    <h3 className="font-bold">Shirpur</h3>
                </div>
                <nav>
                    <ul className="flex space-x-8 text-sm text-gray-600 font-semibold">
                        <li className="flex items-center">
                            <p>Online: {useOnlineStatus() ? '✅' : '🔴'}</p>
                        </li>
                        <li className="flex items-center space-x-1">
                            <TbSearch size={15} />
                            <Link to="#">Search</Link>
                        </li>
                        <li className="flex items-center space-x-1">
                            <TbHelpOctagon size={15} />
                            <Link to="/contact">About Us</Link>
                        </li>
                        <li className="flex items-center space-x-1">
                            <BsPerson size={15} />
                            <Link to="#">{user.loggedInUser}</Link>
                        </li>
                        <li className="flex items-center space-x-1">
                            <PiShoppingCartBold size={15} />
                            <Link to="/cart">
                                Cart {cartItems.length > 0 ? `(${cartItems.length} items)` : ''}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
    //     < header className = "shadow-lg h-20 bg-white" >
    //         <div className='w-4/5  flex justify-between m-auto'>
    //             <div className="flex items-center gap-[50px] flex-grow">
    //                 <Link>
    //                     <img className="w-8  hover:scale-110" src={logo}></img>
    //                 </Link>

    //                 <h3>
    //                     Shirpur
    //                 </h3>
    //             </div>
    //             <nav>
    //                 <ul className='text-sm text-gray-600 font-semibold top-[4%] flex justify-between'>
    //                     <li>
    //                         <p> Online : {useOnlineStatus() ? '✅' : '🔴'}</p>
    //                     </li>
    //                     <li>
    //                         <TbSearch size={15} />
    //                         <Link href="#">Search</Link></li>
    //                     <li>
    //                         <TbHelpOctagon size={15} />
    //                         <Link to='/contact'>About Us</Link></li>
    //                     <li>
    //                         <BsPerson size={15} />
    //                         <Link href="#">{user.loggedInUser}</Link></li>
    //                     <li>
    //                         <PiShoppingCartBold size={15} />
    //                         <Link to="/cart">Cart {cartItems.length > 0 ? "(" + cartItems.length + " items)" : ''}</Link></li>
    //                 </ul>
    //             </nav>
    //         </div>

    //     </header >
    // )
}

export default Header;
