import React from 'react'
import './index.css'
// import {Link} from 'react-router-dom'

import Brand_footer from '../../assets/img/footer/brand_footer.png'
import Theme_line from '../../assets/img/footer/theme_line.png'

// Instagram Logos
import Instagram1 from '../../assets/img/shop-by-category-img/glasses.jpg'
import Instagram2 from '../../assets/img/shop-by-category-img/kids.jpg'
import Instagram3 from '../../assets/img/shop-by-category-img/women.jpg'
import Instagram4 from '../../assets/img/footer/instagram5.jpg'
import Instagram5 from '../../assets/img/shop-by-category-img/shoes.jpg'
import Instagram6 from '../../assets/img/shop-by-category-img/watch.jpg'
import Instagram7 from '../../assets/img/footer/instagram4.jpg'
import Instagram8 from '../../assets/img/shop-by-category-img/women.jpg'
import Instagram9 from '../../assets/img/footer/instagram1.jpg'

// Payments Logos
import Mastercard from '../../assets/img/footer/mastercard.png'
import Paypal from '../../assets/img/footer/paypal.png'
import Visa from '../../assets/img/footer/visa.png'
import Payoneer from '../../assets/img/footer/payoneer.png'
import Discover from '../../assets/img/footer/discover.png'

export default function Index() {
    return (
        <div>
            <section id="footer">
                <div className="hr-theme"></div>
                <div className="bg-footer">
                    <div className="container">
                        <div className="row">
                            {/* First Column Brand & Socials */}
                            <div className="d-none d-md-block col-md-3 mt-5">
                                <img src={Brand_footer} className="brand" alt="/#" />
                                <p className="text-white small text-thiny mt-3 mb-3">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In laborum aliquid officia dolor quam porro facere amet obcaecati, incidunt voluptatem eius ad, labore maiores dignissimos illum eos maxime ea similique. Aut dolores facere odit veritatis?
                                </p>
                                <p className="text-white mb-2">Follow us <span><img src={Theme_line} className="line" alt="" /></span> </p>
                                <div className="socials-footer">
                                    <a href="/#" className="small text-theme mr-2 "><i className="fab fa-facebook-f"></i></a>
                                    <a href="/#" className="small text-theme mr-2"><i className="fab fa-twitter"></i></a>
                                    <a href="/#" className="small text-theme mr-2"><i className="fab fa-instagram"></i></a>
                                    <a href="/#" className="small text-theme mr-2"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="/#" className="small text-theme mr-2"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                            {/* Second Column Contact  */}
                            <div className="d-none d-md-block col-md-3 mt-5">
                                <h6 className="text-theme footer-title">CONTACT INFO</h6>
                                <p className="text-white text-thiny"><span className="text-theme">Address:</span><br />Solna Business Park <br /> Feni-2500, Stockholm</p>
                                <p className="text-white text-thiny"><span className="text-theme">Phone:</span><br />+08-123456789 <br /> +08-123456789</p>
                                <p className="text-white text-thiny"><span className="text-theme">Email:</span><br />support@website.com <br />info@website.com</p>
                            </div>
                            {/* Third Column Links */}
                            <div className="d-none d-md-block col-md-3 mt-5">
                                <h6 className="text-theme footer-title">USEFUL LINKS</h6>
                                <div><a href="/#" className="text-white text-thiny">Privay Policy</a></div>
                                <div><a href="/#" className="text-white text-thiny">Terms & Condition</a></div>
                                <div><a href="/#" className="text-white text-thiny">Contact Us</a></div>
                                <div><a href="/#" className="text-white text-thiny">Our Sitemap</a></div>
                                <div><a href="/#" className="text-white text-thiny">Latest News</a></div>
                                <div><a href="/#" className="text-white text-thiny">Returns</a></div>
                                {/* <div><Link to='/admin'  className="text-white text-thiny">Admin</Link></div> */}
                            </div>
                            {/* Fourth Column Instagram */}
                            <div className="d-none d-md-block col-md-3 mt-5 instagram-wrapper">
                                <h6 className="text-theme footer-title">RECENT INSTAGRAM</h6>
                                {/* Group 1 */}
                                <div className="d-flex">
                                    <img src={Instagram1} className="img-fluid instagram-img mr-2" alt="/#" />
                                    <img src={Instagram2} className="img-fluid instagram-img mr-2" alt="/#" />
                                    <img src={Instagram3} className="d-none d-lg-block img-fluid instagram-img" alt="/#" />
                                </div>
                                {/* Group 2 */}
                                <div className="d-flex">
                                    <img src={Instagram4} className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                    <img src={Instagram5} className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                    <img src={Instagram6} className="d-none d-lg-block img-fluid instagram-img mt-2" alt="/#" />
                                </div>
                                {/* Group 3 */}
                                <div className="d-flex">
                                    <img src={Instagram7} className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                    <img src={Instagram8} className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                    <img src={Instagram9} className="d-none d-lg-block img-fluid instagram-img mt-2" alt="/#" />
                                </div>
                            </div>
                            {/* Shows On Mobiles Only */}
                            <div className="d-none mx-auto mt-3 footer-mobiles">
                                <div className="flex-column mr-3">
                                    <h6 className="text-theme footer-title">CONTACT INFO</h6>
                                    <p className="text-white text-thiny"><span className="text-theme">Address:</span><br />Solna Business Park <br /> Feni-2500, Stockholm</p>
                                    <p className="text-white text-thiny"><span className="text-theme">Phone:</span><br />+08-123456789 <br /> +08-123456789</p>
                                    <p className="text-white text-thiny"><span className="text-theme">Email:</span><br />support@website.com <br />info@website.com</p>
                                </div>
                                <div className="ml-3">
                                    <h6 className="text-theme footer-title">RECENT INSTAGRAM</h6>
                                    {/* Group 1 */}
                                    <div className="d-flex">
                                        <img src={Instagram1} className="img-fluid instagram-img mr-2" alt="/#" />
                                        <img src={Instagram2} className="img-fluid instagram-img mr-2" alt="/#" />
                                        <img src={Instagram3} className="d-none d-lg-block img-fluid instagram-img" alt="/#" />
                                    </div>
                                    {/* Group 2 */}
                                    <div className="d-flex">
                                        <img src={Instagram4} className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                        <img src={Instagram5} className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                        <img src={Instagram6} className="d-none d-lg-block img-fluid instagram-img mt-2" alt="/#" />
                                    </div>
                                    {/* Group 3 */}
                                    <div className="d-flex">
                                        <img src={Instagram7} className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                        <img src={Instagram8} className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                        <img src={Instagram9} className="d-none d-lg-block img-fluid instagram-img mt-2" alt="/#" />
                                    </div>
                                </div>

                            </div>
                            {/* Shows On mobiles Only */}
                            <div className="d-none socials-footer-mobiles mx-auto mt-3">
                                <a href="/#" className="small text-theme mr-2 "><i className="fab fa-facebook-f"></i></a>
                                <a href="/#" className="small text-theme mr-2"><i className="fab fa-twitter"></i></a>
                                <a href="/#" className="small text-theme mr-2"><i className="fab fa-instagram"></i></a>
                                <a href="/#" className="small text-theme mr-2"><i className="fab fa-pinterest-p"></i></a>
                                <a href="/#" className="small text-theme mr-2"><i className="fab fa-youtube"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="bg-footer-bottom">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="text-white small footer-brand">&copy; Kenkata 2020</div>
                            <div className="d-none d-md-block ml-auto">
                                <img src={Mastercard} className="payments mr-2" alt="/#" />
                                <img src={Paypal} className="payments mr-2" alt="/#" />
                                <img src={Visa} className="payments mr-2" alt="/#" />
                                <img src={Payoneer} className="payments mr-2" alt="/#" />
                                <img src={Discover} className="payments" alt="/#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
