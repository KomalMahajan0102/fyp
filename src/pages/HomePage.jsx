import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ExploreMenu from '../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';
import PopularProduct from '../components/PopularProduct/PopularProduct';
import Delivery from '../components/Delivery/Delivery';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';



const HomePage = () => {


    const [Home] = [
        {
            video: "../../src/assets/food.mp4",
            img: "../../src/assets/Chicken.png",
            img1: "../../src/assets/pizza.png"


        }
    ]

    const [category, setCategory] = useState("All");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
        });
    }, []);
    const [show, setShow] = useState(false);


    const [show1, setShow1] = useState(false);





    return (
        <>
            <div className='homepage'>
            <div className='header'>
                    <div className="container-fluid fd-nav" >
                        <Navbar collapseOnSelect expand="lg" className="">
                            <Container>
                                <Navbar.Brand className='fw-bolder text-white'>  CSK QUICKBITE    </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0'>
                                    <FontAwesomeIcon className='text-white fw-bolder' icon={faHamburger} size="lg" />
                                </Navbar.Toggle>
                                <Navbar.Collapse id="responsive-navbar-nav" className='border-0'>


                                    <Nav className="justify-content-center flex-grow-1">
                                        <Nav.Link className='text-white' href="#home"> Home</Nav.Link>
                                        <Nav.Link className='text-white' href="#menu">Menu</Nav.Link>
                                        <Nav.Link className='text-white' href="#blog">Blog</Nav.Link>
                                        <Nav.Link className='text-white' href="#review">Review</Nav.Link>
                                        <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>

                                    </Nav>
                                    <Nav className='d-flex '>
                                        <Nav.Link><i className="bi bi-arrow-clockwise text-white fw-bolder"></i></Nav.Link>
                                        <Nav.Link ><i className="bi bi-cart-plus-fill text-white fw-bolder"></i></Nav.Link>
                                        <Nav.Link ><i className="bi bi-bag-check-fill text-white fw-bolder"></i></Nav.Link>
                                        <Nav.Link ><i className="bi bi-box-arrow-in-down text-white fw-bolder"></i></Nav.Link>

                                        <Nav.Link ><i className="bi bi-box-arrow-in-up text-white fw-bolder"></i></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>


                    </div>
                    <div id='home'>
                        <div className="video-container container-fluid">
                            <video className="video-bg" src={Home.video} autoPlay loop muted></video>
                        </div>
                        <div className={`container-fluid ${show1 ? 'blur' : ''}`}>
                            <div className={`container-fluid ${show ? 'blur' : ''}`}>
                                <div className="container fd-content">
                                    <div className=" row  d-flex justify-content-around text-white" style={{ textAlign: 'justify' }}>
                                        <div className="col-lg-5 pt-3 pt-sm-0 pb-5 fd-content col-12 text-center order-md-1 order-2 desc">
                                            <h2 className='fw-bolder'> We believe Good food</h2>
                                            <h2 className='fw-bolder'> Offers Great smile <i className="icn fas fa-smile-wink"></i></h2>
                                            <p>
                                                " Get ready to nestle into a world of flavor with FoodNest's scrumptious non-veg dishes, crafted to satisfy your cravings !!"
                                                Your one-stop destination for succulent non-veg food that will leave you wanting more, every time !"
                                            </p><br></br>
                                            <div className=' text-center'>
                                                <button className="fd-btn border-0 text-white">Order Now</button>  <button className='fd-btn2  border-0'>Reserve</button>
                                            </div>


                                        </div>

                                        <div className="col-lg-3 col-10 pt-md-5 mt-md-5 mt-lg-5 mt-xl-1 order-md-2 order-1 pizza-chicken">
                                            <img className='img-fluid fd-rotate d-block d-md-none d-lg-block' src={Home.img} alt="" />
                                            <img className="img-fluid fd-img d-block d-md-none d-lg-block" src={Home.img1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PopularProduct></PopularProduct>
                <Delivery></Delivery>
                <Footer></Footer>
            </div>
            
        </>
    )
}

export default HomePage;