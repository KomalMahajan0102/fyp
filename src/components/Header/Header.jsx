import React from 'react'
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
import './Header.css'

function Header() {
  return (
    <div className="container-fluid fd-nav" >
                        <Navbar collapseOnSelect expand="lg" className="">
                            <Container>
                                <Navbar.Brand className='fw-bolder b-name'>  CSK QUICKBITE    </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0'>
                                    <FontAwesomeIcon className='text-white fw-bolder' icon={faHamburger} size="lg" />
                                </Navbar.Toggle>
                                <Navbar.Collapse id="responsive-navbar-nav" className='border-0'>


                                    <Nav className="justify-content-center flex-grow-1">
                                        <Nav.Link className='text-white' href="/"> Home</Nav.Link>
                                        <Nav.Link className='text-white' href="/menu">Menu</Nav.Link>
                                        <Nav.Link className='text-white' href="#blog">Blog</Nav.Link>
                                        <Nav.Link className='text-white' href="#review">Review</Nav.Link>
                                        <Nav.Link className='text-white' href="/about">About</Nav.Link>

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
  )
}

export default Header
