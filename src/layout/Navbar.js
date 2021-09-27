import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import styled from 'styled-components';

import { SocialLinks } from '../components';

import Logo from '../assets/colorlogo.png';
const Navbar = () => {
  return (
    <NavWrapper>
      <Wrapper>
        <Link to="/">
          <Image src={Logo} alt="" />
        </Link>
        <SocialLinks />
      </Wrapper>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  ${tw`
  border-2
  border-red-500
 `}
`;

const Wrapper = styled.div`
  ${tw`
    container
    mx-auto

     
  flex
  flex-row

  justify-between

  border-2
  border-green-500
 `}
`;

const Image = styled.img`
  ${tw`
     w-28
     lg:w-24
 `}
`;
