import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import styled from 'styled-components';

import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';

const SocialLinks = () => {
  return (
    <Wrapper>
      <Image src={Facebook} alt="Facebook icon" />
      <Image src={Instagram} alt="Facebook icon" />
      <Image src={whatsapp} alt="Facebook icon" />
    </Wrapper>
  );
};

export default SocialLinks;

const Wrapper = styled.div`
  ${tw`
 
   flex 

  border-2
  border-green-500
 `}
`;

const Image = styled.img`
  ${tw`
     w-10
 `}
`;
