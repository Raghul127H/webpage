import React from 'react'
import "./style.css"
import logo from "./images/Bridge-logo.png" 
import banner from "./images/award.png"
import tent from "./images/1-about.png"
import sales from "./images/2-about.png"
import stove from "./images/support-1.png"
import order from "./images/order.png"  




  export  default function  Homepage() {

    return (
        <div>

            <header>    
                <nav class="navbar">
                   <a><img src={logo}/></a>
                    <input type="checkbox" id="menu-toggler" />
                    <label for="menu-toggler" id="hamburger-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </label>
                    <ul class="all-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </header>

            <section class="homepage" id="home">
                <div class="content">
                    <div class="text">
                        <h1>Camping Gear and Essentials</h1>
                        <p>
                            Discover top-quality camping gear for unforgettable outdoor adventures. <br /> Gear up and make lasting
                            memories.</p>

                        <a href="#services">Our Services</a>
                    </div>
                    <div class="hero-banner-img">
                    {/* <img src={banner} width={300}  height={400}/> */}
                    </div>
                </div>
            </section>


            <section class="services-section" id="services">
                <h2 class="services-title">Discover what Bridge can do for you</h2>
                <ul class="cards-list">
                    <li class="card-item">
                        <img src={tent} alt="Tent" />
                        <h3 class="card-title">Marketing</h3>
                        <p class="card-description">Focus on the best leads</p>
                    </li>
                    <li class="card-item">
                        <img src={sales}/>
                        <h3 class="card-title">Sales</h3>
                        <p class="card-description">Break new Sales records</p>
                    </li>
                    <li class="card-item">
                        <img src={stove} alt="Camp Stove" />
                        <h3 class="card-title">Service Support</h3>
                        <p class="card-description">Make your customer Staisfd</p>
                    </li>
                    <li class="card-item">
                        <img src={order} alt="Backpack" />
                        <h3 class="card-title">Integration</h3>
                        <p class="card-description">More visibility with ERP integration
                        </p>
                    </li>
                </ul>
            </section>
            <div class="cardtwo-container">
        <div class="cardtwo vista">Vista</div>
        <div class="cardtwo serve">Serve</div>
        <div class="cardtwo omni">Omni</div>
        <div class="cardtwo nexus">Nexus</div>
        <div class="cardtwo pulse">Pulse</div>
        <div class="cardtwo drive">Drive</div>
        <div class="cardtwo dealer">Dealer Management</div>
        <div class="cardtwo galaxy">Galaxy</div>
    </div>


             


            <section>
                <div class="containerOne">
                    <div class="rows">
                        <div class="col">
                            <div class="pricing-table purple">
                                <div class="pricing-label">Fixed Price</div>
                                <h2>BasicPack 2020</h2>
                                <h5>Made for starters</h5>
                                <div class="pricing-features">
                                    <div class="feature">Bandwith<span>50 GB</span></div>
                                    <div class="feature">Add-On Domains<span>10</span></div>
                                    <div class="feature">SSD Storage<span>250 GB</span></div>
                                    <div class="feature">Mail Adresses<span>25</span></div>
                                    <div class="feature">Support<span>Only Mail</span></div>
                                </div>
                                <div class="price-tag">
                                    <span class="symbol">$</span>
                                    <span class="amount">7.99</span>
                                    <span class="after">/month</span>
                                </div>
                                <a class="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="pricing-table turquoise">
                                <div class="pricing-label">Fixed Price</div>
                                <h2>ExtendedPack 2020</h2>
                                <h5>Made for experienced users</h5>
                                <div class="pricing-features">
                                    <div class="feature">Bandwith<span>150 GB</span></div>
                                    <div class="feature">Add-On Domains<span>25</span></div>
                                    <div class="feature">SSD Storage<span>500 GB</span></div>
                                    <div class="feature">Mail Adresses<span>50</span></div>
                                    <div class="feature">Support<span>Mail/Phone</span></div>
                                </div>
                                <div class="price-tag">
                                    <span class="symbol">$</span>
                                    <span class="amount">9.99</span>
                                    <span class="after">/month</span>
                                </div>            <a class="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="pricing-table red">
                                <div class="pricing-label">Fixed Price</div>
                                <h2>ProsPack 2020</h2>
                                <h5>Made for professionals/agencies</h5>
                                <div class="pricing-features">
                                    <div class="feature">Bandwith<span>250 GB</span></div>
                                    <div class="feature">Add-On Domains<span>50</span></div>
                                    <div class="feature">SSD Storage<span>1 TB</span></div>
                                    <div class="feature">Mail Adresses<span>75</span></div>
                                    <div class="feature">Support<span>7/24</span></div>
                                </div>
                                <div class="price-tag">
                                    <span class="symbol">$</span>
                                    <span class="amount">12.99</span>
                                    <span class="after">/month</span>
                                </div>
                                <a class="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="about" id="about">
                <h2>About Us</h2>
                <p>Discover our story in providing camping services.</p>
                <div class="row company-info">
                    <h3>We’re changing the
                        way people think about CRM</h3>
                    <p>Welcome to BRIDGE, the end-to-end CRM software that redefines customer relationship management. Our tailored
                        solution
                        provides a unified ecosystem for managing all aspects of your customer relationship - from sales and marketing
                        to
                        service and satisfaction. With BRIDGE, elevate service quality, improve information flow, better marketing
                        campaigns,
                        shorten sales cycles, and enhance productivity across your organization.

                        Our user-friendly and adaptable software is designed to help businesses of all sizes achieve their real
                        potential.
                        Experience the power of BRIDGE and take your business to new heights with a holistic CRM solution that delivers
                        results
                        in one ecosystem. Transform the way you connect with your customers and streamline your business processes with
                        BRIDGE.</p>
                </div>
                <div class="row mission-vision">
                    <h3>Our Mission</h3>
                    <p>Our mission is to simplify the complexities of customer relationship management by providing a revolutionary
                        end-to-end
                        CRM software that empowers businesses to connect with their customers seamlessly. We aim to enhance productivity
                        and
                        ensure our clients achieve their full potential by offering a unified ecosystem for all customer-related needs.
                    </p>
                    <h3>Our Culture</h3>
                    <p>At Bridge, our culture is rooted in values that guide us towards being a high-performing team.

                        We deeply care about our members, and by putting them first, we create a quality product that we proudly stand
                        behind.
                        Helpfulness is a part of our DNA, and we believe in uplifting and supporting one another. We value openness,
                        honesty,
                        and accountability, and we never give up when faced with challenges.

                        We believe that everyone deserves an opportunity to thrive, and we are committed to creating an inclusive and
                        empowering
                        environment where all Bridge team members can excel. Our culture is built on relationships, growth, and impact,
                        and we
                        aim to uphold the highest professional and ethical standards while cultivating an environment of innovation and
                        learning.</p>
                </div>
                <div class="row team">
                    <h3>Our Team</h3>
                    <ul>
                        <li>John Doe - Founder and CEO</li>
                        <li>Jane Smith - Gear Specialist</li>
                        <li>Mark Johnson - Customer Representative</li>
                        <li>Sarah Brown - Operations Manager</li>
                    </ul>
                </div>
            </section>

            <section class="contact" id="contact">
                <h2>Contact Us</h2>
                <p>Reach out to us for any inquiries or feedback.</p>
                <div class="row">
                    <div class="col information">
                        <h2>Headquarters</h2>
                        <div class="contact-details">
                            <div>
                                <h6>India</h6>
                                <p>
                                    E-138, Sector 63 Noida,
                                    Uttar Pradesh 201301</p>
                            </div>
                            <div>
                                <h6>USA</h6>
                                <p>
                                    2715 Calle De La Loma, Pleasanton CA 94566</p>
                            </div>

                            <div>
                                <h6>UAE</h6>
                                <p>
                                    Impact Hub, Souk Al-Bahar Downtime Dubai</p>
                            </div>

                            <div>
                                <h6>Africa</h6>
                                <p>
                                    Abacus House, General Mathenge Road P.O. Box 38988 - 00623 - Parklands Nairobi, Kenya</p>
                            </div>

                        </div>
                    </div>
                    <div class="col form">
                        <form>
                            <input type="text" placeholder="Name*" required />
                            <input type="email" placeholder="Email*" required />
                            <input type="phone" placeholder="Phone*" required />
                            <input type="name" placeholder="Company Name*" required />
                            <input type="subject" placeholder="Subject*" required />
                            <textarea placeholder="Question/Comment*" required></textarea>
                            <button id="submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec
                                            tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

 
