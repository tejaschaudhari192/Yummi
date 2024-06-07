import './Header.css';
import { TbDiscount2 } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { TbHelpOctagon } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { PiPerson, PiShoppingCartBold } from "react-icons/pi";

import logo from './../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

function Header() {
    return (
        <header>
            {/* <div className="header"> */}
            <div className='header-navbar'>
                <div className="logo">
                    <h1><a href="#">
                        <img src={logo}></img>
                    </a></h1>

                    <h3>
                        Shirpur
                    </h3>
                </div>
                <nav>
                    <ul>
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
                            <Link href="#">Sign In</Link></li>
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
