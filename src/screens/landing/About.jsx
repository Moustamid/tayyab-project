import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';
import { PrimaryBtn } from '../../components/button';

const About = () => {
  return (
    <Section>
      <Left>
        <SubHeader>About us</SubHeader>
        <Header>
          We are the best fitness
          <span className="block">provider in Mexico City</span>
        </Header>
        <Text>
          we are the best sports service provider in the world, we always
          provide pleasant service, coupled with professional and trained
          instructors you can also do the exercises personally .
        </Text>
        <PrimaryBtn text="read more" />
      </Left>
      <Right>
        <SmallImgsContainer>
          <ImageBoxS1>
            <StaticImage
              as="div"
              className="overflow-hidden"
              imgClassName="w-full h-full rounded-3xl"
              objectFit
              placeholder="tracedSVG"
              src="../../assets/images/about/s1.png"
              alt="box1"
            />
            <Text1>Progress</Text1>
          </ImageBoxS1>
          <ImageBoxS2>
            <StaticImage
              as="div"
              className="overflow-hidden"
              imgClassName="w-full h-full rounded-3xl"
              objectFit
              placeholder="tracedSVG"
              src="../../assets/images/about/s2.png"
              alt="box1"
            />
          </ImageBoxS2>
        </SmallImgsContainer>
        <ImageBoxBig>
          <StaticImage
            as="div"
            className="overflow-hidden"
            imgClassName="w-full h-full rounded-3xl"
            objectFit
            placeholder="tracedSVG"
            src="../../assets/images/about/big.png"
            alt="box1"
          />
          <Text2>2021 Fitness Event</Text2>
        </ImageBoxBig>
      </Right>
    </Section>
  );
};

export default About;

const Section = styled.section`
  ${tw` 
     container
     mx-auto
     grid
     md:grid-cols-2
    
     pt-36
     pb-20
 `}
`;

// . .................... Right Section ....................
const Right = styled.div`
  ${tw`
  relative
  grid
  grid-cols-2
  gap-4
 `}
`;

const ImageBoxBig = styled.div`
  ${tw`
    rounded-3xl
    overflow-hidden
    w-60
    relative
 `};
`;

const SmallImgsContainer = styled.div`
  ${tw`
  flex
  flex-col
  
 `};
`;

const ImageBoxS1 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
    rounded-3xl
    overflow-hidden
    self-end
    relative
 `};
`;

const ImageBoxS2 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
    rounded-3xl
    overflow-hidden
    self-end
    relative
 `};
`;

const Text1 = styled.h2`
  top: 70%;
  left: 60%;
  transform: translate(-50%, -50%);
  ${tw`
   absolute
   text-gray-50
   font-poppins
   text-xl
   font-semibold
   tracking-wide
   leading-8
   w-4/5
 `}
`;

const Text2 = styled.h2`
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${tw`
   absolute
   text-gray-50
   font-poppins
   text-xl
   font-semibold
   tracking-wide
   leading-8
   w-4/5
 `}
`;
// . ....................  Left Section  ....................

const Left = styled.div`
  ${tw`
  

 `}
`;

const SubHeader = styled.h3`
  ${tw`
   font-roboto
   text-PrimaryPurple
   font-medium
   text-lg
   tracking-wider

   px-2
   lg:px-0
   
   my-2.5
   lg:my-6

 `}
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

const Text = styled.p`
  width: 80%;
  ${tw`
   font-roboto
   text-gray-500
   font-normal
   text-base
   
   mb-10


   w-full
   lg:w-4/5
   px-2
   lg:px-0
   
 `}
`;
