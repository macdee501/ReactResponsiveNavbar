import React, { useState } from 'react'
import { LeftContainer, Logo, MenuButton, MobileNavbarLink, NavbarContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarMobileContainer, RightContainer } from '../styles/Navbar.styles'
import LogoImg from '../assets/react.svg';
export default function Navbar() {

  const [mobileNavbar, setMobileNavbar] = useState(false);

  return (
    <>
    <NavbarContainer mobileNavbar={mobileNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/shop">Shop</NavbarLink>
            <NavbarLink to="/contact">Contact Us</NavbarLink>
            <NavbarLink to="/about">About Us</NavbarLink>
            <MenuButton onClick={() => {
              setMobileNavbar((curr) => !curr)
            }} >
              {mobileNavbar ? <>&#10005;</> : <> &#8801;</>}
             
              </MenuButton>

          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {mobileNavbar && (
        <NavbarMobileContainer>
           <MobileNavbarLink to="/shop">Shop</MobileNavbarLink>
            <MobileNavbarLink to="/contact">Contact Us</MobileNavbarLink>
            <MobileNavbarLink to="/about">About Us</MobileNavbarLink>
          
        </NavbarMobileContainer>
      )}

    </NavbarContainer>
    </>
  )
}
