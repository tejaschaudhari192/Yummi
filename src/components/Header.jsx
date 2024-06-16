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

function Header() {
    const user = useContext(UserContext);

    return (
        <header>
            {/* <div className="header"> */}
            <div className='header-navbar w-4/5 py-2 flex justify-between items-center m-auto'>
                <div className="flex items-center gap-[50px] flex-grow">
                    <h1><a href="#">
                        <img src={logo}></img>

                    </a></h1>

                    <h3>
                        Shirpur
                    </h3>
                </div>
                <nav>
                    <ul className='flex list-none font-semibold absolute top-[7%] left-[40%]'>
                        <li>
                            <p> Online : {useOnlineStatus() ? '✅' : '🔴'}</p>
                        </li>
                        <li>
                            <TbSearch size={15} />
                            <Link href="#">Search</Link></li>
                        <li>
                            <TbDiscount2 size={15} />
                            <Link href="#">A    </Link></li>
                        <li>
                            <TbHelpOctagon size={15} />
                            <Link to='/contact'>About Us</Link></li>
                        <li>
                            <BsPerson size={15} />
                            <Link href="#">{user.loggedInUser}</Link></li>
                        <li>
                            <PiShoppingCartBold size={15} />
                            <Link href="#">Cart</Link></li>
                    </ul>
                </nav>
            </div>

            {/* </div> */}
        </header>
    )
}

export default Header;
