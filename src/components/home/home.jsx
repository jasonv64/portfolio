import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Home() {
    const [showModal, setShowModal] = useState({modal: 0});
    const [cardColumns, setCardColums] = useState('');

    const handleClose = () => setShowModal({modal: 0});
    const handleShow1 = () => setShowModal({modal: 1});
    const handleShow2 = () => setShowModal({modal: 2});    
    const handleShow3 = () => setShowModal({modal: 3});

    useEffect(() => {
        if (window.innerWidth < 534) {
            setCardColums('row-cols-2');
          } else if (window.innerWidth < 1561) {
            setCardColums('row-cols-2');
          } else {
            setCardColums('row-cols-4');
          }    
    }, [])

    return(
        <div>
            <header>
                <div class="container">
                    <div class="intro-text">
                        <div class="intro-lead-in">Hello world!</div>
                        <div class="intro-heading">Glad to have you here.</div>
                        <a href="#services" class="page-scroll btn btn-xl">how Can we help?</a>
                    </div>
                </div>
            </header>

            {/* Services Section */}
            <section id="services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">Services</h2>
                            <h3 class="section-subheading text-muted">Helping you with reach your tech goals.</h3>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16">
                                    <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                                    <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
                                </svg>
                            </span>
                            <h4 class="service-heading">Custom Websites</h4>
                            <p class="text-muted">Need a great looking site? We work from start to finish to design, build and implement a beautiful and responsive website.</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                                </svg>
                            </span>
                            <h4 class="service-heading">Software Integrations</h4>
                            <p class="text-muted">Streamline your daily workflow by building a powerfull connection between your applications. Save time and skip out on user errors.</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
                                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                                </svg>
                            </span>
                            <h4 class="service-heading">Data Analysitcs</h4>
                            <p class="text-muted">Let us build powerfull dashboards to give you quick and meaningful insights into your data. </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid Section */}
            <section id="portfolio" class="bg-light-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">Portfolio</h2>
                            <h3 class="section-subheading text-muted">Latest projects.</h3>
                        </div>
                    </div>
                    <div class={`row ${cardColumns}`}>
                        <Button className="col modal-trigger-button" onClick={handleShow1}>
                            <Card>
                                <Card.Img variant="top" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1679685436/not-sw/sunwashers-site_qkbi9y.png" />
                                <Card.Body>
                                    <Card.Title className="card-title">Sunwashers</Card.Title>
                                    <Card.Text className="card-text">
                                    <i> Business Website </i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Button>
                        <Button className="modal-trigger-button col" onClick={handleShow3}>
                            <Card>
                                <Card.Img variant="top" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1679691231/not-sw/Screenshot_2023-03-24_135342_fdr6cp.png" />
                                <Card.Body>
                                    <Card.Title className="card-title">Power Bi</Card.Title>
                                    <Card.Text className="card-text">
                                    <i>Sales Dashboard</i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Button>
                        <Button className="col modal-trigger-button" onClick={handleShow2}>
                            <Card>
                                <Card.Img variant="top" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1679687783/not-sw/legiswap-site_ef9v70.png" />
                                <Card.Body>
                                    <Card.Title className="card-title">Ledgiswap</Card.Title>
                                    <Card.Text className="card-text">
                                    <i> Crypto-powered merchant site </i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section  */}
            <section id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">About</h2>
                            <h3 class="section-subheading text-muted">I wonder what will happen if...</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src="img/about/1.jpg" alt=""/>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>April 2018</h4>
                                            <h4 class="subheading">Set out on a journey</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                2018 was when i decided to take the plunge into tech with one goal in mind: become a software engineer. Enrolled for a bootcamp and never looked back. Got to play
                                                with the popular MERN stack (MongoDb, Express.js, React.js and Node.js)
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src="img/about/2.jpg" alt=""/>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>March 2019</h4>
                                            <h4 class="subheading">First real chance</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Searching for tech work was no easy task. Eventually, i bugged enough people to get a go at it! 
                                                Became a systems analyist and started working with C#, ASP.net and SQL. Built some reports, fixed some buggest etc.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src="img/about/3.jpg" alt=""/>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>December 2020</h4>
                                            <h4 class="subheading">Headfirst - integrations</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Kept bugging people, lead to this. All of the sudden, I had a contact for an up and coming company (shout out to <a href="https://www.linkedin.com/company/mr-procore/" target="_blank" rel="noreferrer">The Rollout Crew</a>)
                                                and we had to figure out how to produce a polished integration with analytics built on top for a fortune 500 company starting a MASSIVE project.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <img class="img-circle img-responsive" src="img/about/4.jpg" alt=""/>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>May 2022</h4>
                                            <h4 class="subheading">Won the title</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Finally, after working and growing alongside such a great company (shout out to <a href="https://www.linkedin.com/company/mr-procore/" target="_blank" rel="noreferrer">The Rollout Crew</a> again)
                                                i was offered a position as a Solutions Engineer.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <h4>And here
                                            <br/>we are
                                            <br/>today.</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-body">
                                            <p class="text-muted">
                                                Had a great time learning all about tech. Lets continue doing cool things, yeah?
                                            </p>
                                        </div>
                                        <div class="timeline-heading">
                                            <h4><a href="#contact">Message Me</a></h4>
                                            <h4 class="subheading">To help me help you code.</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" class="bg-light-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">Lets connect!</h2>
                            <h3 class="section-subheading text-muted">Find my socials below</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="team-member">
                                <h4>Jason Valadez</h4>
                                <p class="text-muted">Techy guy</p>
                                <div class="row social-buttons">
                                    <div className="col">
                                        <a href="https://www.instagram.com/valajaso/">
                                            Instagram
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.facebook.com/jason.valadez.1238">
                                            FaceBook
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.linkedin.com/in/jason-valadez-732872227/">
                                            Linkedin
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="modal-project-info">
                            <p class="large text-muted">
                                Lets talk about tech, nature, music or your cool ideas! Looking forward to connecting with ya.
                            </p>
                        </div>
                    </div>
                </div>
            </section>   
            
            {/* Contact Section */}
            <section id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">Contact Me</h2>
                            <h3 class="section-subheading text-muted">Send me an email.</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <form name="sentMessage" id="contactForm" novalidate="">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Your Name *" id="name" required="" data-validation-required-message="Please enter your name."/>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" id="email" required="" data-validation-required-message="Please enter your email address."/>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required="" data-validation-required-message="Please enter your phone number."/>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <textarea class="form-control" placeholder="Your Message *" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button type="submit" class="btn btn-xl">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 row">
                            <span class="copyright">Copyright © Jason Valadez 2023</span>
                            <div class="col">
                                 <div class="row social-buttons">
                                    <div className="col">
                                        <a href="https://www.instagram.com/valajaso/">
                                            Instagram
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.facebook.com/jason.valadez.1238">
                                            FaceBook
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.linkedin.com/in/jason-valadez-732872227/">
                                            Linkedin
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                            <div class="quicklinks row">
                                <div className="col">
                                    <a href="#">Privacy Policy</a>
                                </div>
                                <div className="col">
                                    <a href="#">Terms of Use</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Portfolio Modals */}
            <Modal className="modal" show={showModal.modal === 1 ? true : false} fullscreen={true} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Sunwashers</Modal.Title>
                    
                    <i>A cleaning service comapny based in Southern California</i>
                </Modal.Header>
                <Modal.Body className="card-text">
                    <div className="row">
                        <img className="modal-image" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1679685436/not-sw/sunwashers-site_qkbi9y.png" alt="sunwashers web home page"/>
                    </div>
                    <div className="modal-project-info">
                        <Button className="primary"><a href="https://www.sunwashers.com/" target="_blank" rel="noreferrer" style={{color: "#222", textDecoration: 'none'}}>View Site</a></Button>
                    </div>
                    <div className="modal-project-info">
                        <i>Tech stack: Next.js, React.js, Vercel, Azure, Cloudinary and <a href="https://www.goformz.com/" target="_blank" rel="noreferrer">Goformz</a></i>
                        <br></br>
                        <br></br>
                        <a href="https://www.sunwashers.com/" target="_blank" rel="noreferrer">Sunwashers </a> was in need of a website both ready to present to customers and serve as a base for an SEO strategy.
                        In order to satisfy their business needs, we built a fully responsive website, hooked up with Google Analytics to help sunwashers keep track of traffic and SEO performance.
                        <br></br>
                        <br></br>
                        To further enhance SEO, we build a custom blog feature that allows an admin to write articles via a custom built form and have it automatically display on their website.
                        This helps hide away any of that complicated tech.
                        <br></br>
                        <br></br>
                        How's that for user friendly?
                        <br></br>
                        <br></br>
                    </div>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal className="modal" show={showModal.modal === 2 ? true : false} fullscreen={true} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Ledgiswap</Modal.Title>
                    
                    <i>A project aming to enable everyone to use crypto</i>
                </Modal.Header>
                <Modal.Body className="card-text">
                    <div className="row">
                        <img className="modal-image" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1679687783/not-sw/legiswap-site_ef9v70.png" alt="sunwashers web home page"/>
                    </div>
                    <div className="modal-project-info">
                        <i>Tech stack: React.js,  MySQL, Azure, Express.js and Socket.io</i>
                        <br></br>
                        <br></br>
                            Ledgiswap has a lot going on. The website is intended to serve as a marketplace where users can post items for sale, select their perfered currency,
                            and message other users to negotiate on pricing. There will be a settlement engine working in the background enabling currency-to-crrency transactions.
                        <br></br>
                        <br></br>
                            This work-in-progress currenly supports user signups, loggins, and user postings. Users are also able to choose their perfered currency and all prices are updated 
                            to display in that currency.
                            Coming features include: a mobile app, enhanced transaction security and fully functional messaging rooms.
                        <br></br>
                        <br></br>
                            Come back in a few months or so, hopefully we'll have a link to an MVP by then! Otherwise, reach out to use for a demonstration at its current state : )
                        <br></br>
                        <br></br>
                    </div>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal className="modal" show={showModal.modal === 3 ? true : false} fullscreen={true} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Power Bi</Modal.Title>
                    
                    <i>A dashboard helping drive sales forward</i>
                </Modal.Header>
                <Modal.Body className="card-text">
                    <div className="row">
                        <img className="modal-image" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1679691231/not-sw/Screenshot_2023-03-24_135342_fdr6cp.png" alt="sunwashers PowerBi"/>
                    </div>
                    <div className="modal-project-info">
                        <i>Tech stack: Azure, PowerBi</i>
                        <br></br>
                        <br></br>
                           This is a simple dashboard built to provide insight into an orginizations best sales associates.
                        <br></br>
                        <br></br>
                            The data is pulled live from an Azure SQL database, ensuring you see relevent info everytime.
                        <br></br>
                        <br></br>
                            Yes i like blue a lot. Come back later for a live link to the dashboard! P.S. All this data is mine thats why its here.
                        <br></br>
                        <br></br>
                    </div>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Home;