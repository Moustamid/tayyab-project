import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Subscribe = () => {
  return (
    <Section>
      <Header>
        Subscribe For More Info
        <span className="block">and update from Mimix</span>
      </Header>

      <form className=" w-1/3 flex flex-row justify-between  relative ">
        <Input type="email" name="" placeholder="Your Email ... " />
        <Sub type="submit" name="" value="Subscribe" />
      </form>
    </Section>
  );
};

export default Subscribe;

const Section = styled.section`
  ${tw`
   py-24
   w-full
   relative

   flex
   flex-col
   justify-center
   items-center
 `};
`;

const Header = styled.h2`
  ${tw`
   font-poppins
   text-gray-800
   font-semibold
   text-3xl
   leading-snug

   px-2
   lg:px-0


   mb-8
 `}
`;

const Input = styled.input`
  height: 40px;
  min-width: 60%;
  border: 0.2px solid;
  ${tw`

  inline-block 
  font-light 
  text-base
  shadow-xl
  px-4
  py-3.5
  rounded-full
  flex-grow
  border-purple-50
  outline-none
 `};
`;

const Sub = styled.input`
  height: 40px;
  ${tw`
  absolute
  left-3/4


  bg-PrimaryPurple 
  w-32
  text-gray-100
  rounded-full
  cursor-pointer
 `}
`;
