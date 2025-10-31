import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaUserMd } from 'react-icons/fa';

const Nav = styled.nav`
  background: linear-gradient(to right, #ffffff, #f0f9ff);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1400px) / 2);
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 15px rgba(44, 82, 130, 0.15);
  }
`;

const Logo = styled(Link)`
  color: #2c5282;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Arial', sans-serif;
  margin-left: 3rem;
  padding-right: 2rem;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 12px;
    font-size: 32px;
    color: #4299e1;
  }

  &:hover {
    transform: scale(1.05);
    color: #4299e1;
  }

  @media screen and (max-width: 768px) {
    margin-left: 1.5rem;
    font-size: 1.5rem;
    
    svg {
      font-size: 28px;
    }
  }
`;

const NavLink = styled(Link)`
  color: #2d3748;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: #4299e1;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #4299e1;
    transform: translateY(-2px);
    
    &:after {
      width: 60%;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    background: rgba(255, 255, 255, 0.98);
    padding: 20px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;
    gap: 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  color: #2c5282;
  margin-right: 2rem;

  &:hover {
    color: #4299e1;
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">
        <FaUserMd />
        Dr. Padmaja Health
      </Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavMenu isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
        <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;