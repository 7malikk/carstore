import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';
import {ButtonContainer} from './Button';

{/* <i class="fas fa-car fa-2x"></i> */}



export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar nabar-expand-sm navbar-dark px-sm-5'>
               <Link to='/'>
                <img src={logo} alt='store' className='navbar-brand' />
               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to='/' className='nav-link'>
                           Cars
                       </Link>
                   </li>
               </ul>
               <Link to="/cart" className='ml-auto'>
                   <ButtonContainer>
                       <span className='mr-2'>
                       <i className="fas fa-cart-plus"></i>
                       </span>
                       my cart
                   </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper =styled.nav`
background:var(--mainGrey);
.nav-link{
    color:var(--lightGrey)!important;
    font-size:1.3rem;
    //1rem=6px
    text-transform:capitalize;
}
`

