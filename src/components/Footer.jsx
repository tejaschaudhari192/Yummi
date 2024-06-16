import logo from './../assets/images/logo/logo.png';

export default function Footer() {
    return (
        <footer className='bg-black py-[40px] text-white'>
            <div className="max-w-[700px] mx-auto flex flex-wrap justify-between">
                <div className="flex flex-wrap justify-between">
                    <div className="footer-col">
                        <img src={logo} className='w-[50px]' alt="Swiggy logo" />
                        <p className='opacity-70'>© 2024 Bundl Technologies Pvt. Ltd</p>
                    </div>
                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Team</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>We Deliver To</h3>
                        <ul>
                            <li><a href="#">Bangalore</a></li>
                            <li><a href="#">Gurgaon</a></li>
                            <li><a href="#">Hyderabad</a></li>
                            <li><a href="#">Delhi</a></li>
                            <li><a href="#">Mumbai</a></li>
                            <li><a href="#">Pune</a></li>
                            <li><a href="#">589 cities</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>More Links</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Help & Support</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>

    );
}