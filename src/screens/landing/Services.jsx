import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Services = () => {
  return (
    <Section>
      <div className="text-right relative h-40 container mx-automb-16">
        <Wrapper>
          <SubHeader>Services</SubHeader>
          <Header>
            We are the best fitness
            <span className="block">provider in Mexico City</span>
          </Header>
        </Wrapper>
      </div>
      <Subsection>
        <Left>
          <ImageBoxBig>
            <StaticImage
              as="div"
              className="overflow-hidden"
              imgClassName="w-full h-full rounded-3xl"
              objectFit
              placeholder="tracedSVG"
              src="../../assets/images/services/big.png"
              alt="box1"
            />
          </ImageBoxBig>
        </Left>
        <Right>
          <SmallImgsContainer>
            <ImageBox1>
              <StaticImage
                as="div"
                className="overflow-hidden"
                imgClassName="w-full h-full rounded-3xl"
                objectFit
                placeholder="tracedSVG"
                src="../../assets/images/services/s1.png"
                alt="box1"
              />
            </ImageBox1>
            <ImageBox2>
              <StaticImage
                as="div"
                className="overflow-hidden"
                imgClassName="w-full h-full rounded-3xl"
                objectFit
                placeholder="tracedSVG"
                src="../../assets/images/services/s2.png"
                alt="box1"
              />
            </ImageBox2>
            <ImageBox3>
              <StaticImage
                as="div"
                className="overflow-hidden"
                imgClassName="w-full h-full rounded-3xl"
                objectFit
                placeholder="tracedSVG"
                src="../../assets/images/services/s3.png"
                alt="box1"
              />
            </ImageBox3>
            <ImageBox4>
              <StaticImage
                as="div"
                className="overflow-hidden"
                imgClassName="w-full h-full rounded-3xl"
                objectFit
                placeholder="tracedSVG"
                src="../../assets/images/services/s4.png"
                alt="box1"
              />
            </ImageBox4>
          </SmallImgsContainer>
        </Right>
      </Subsection>
    </Section>
  );
};

export default Services;

const Section = styled.section`
  ${tw`
   w-full
   relative
   overflow-hidden 
   
   
   flex
   flex-col 

   mb-20

 `};
`;

const Wrapper = styled.div`
  ${tw`
  absolute 
  top-0
    right-0
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

// . .................... Sub Section ....................

const Subsection = styled.div`
  ${tw`
     pt-16
     grid
     grid-cols-2
     gap-4

 `}
`;

// . .................... Right Section ....................
const Right = styled.div`
  ${tw`
   h-full  
   relative
 `}
`;

const SmallImgsContainer = styled.div`
  grid-template-columns: 150px 150px;
  grid-template-rows: 170px 170px;
  ${tw`
   grid
   gap-x-2.5

 `};
`;

const ImageBox1 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
  
    rounded-3xl
    overflow-hidden
 `};
`;
const ImageBox2 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
    rounded-3xl
    overflow-hidden
 `};
`;
const ImageBox3 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
    rounded-3xl
    overflow-hidden
 `};
`;
const ImageBox4 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
    rounded-3xl
    overflow-hidden
 `};
`;

// . ....................  Left Section  ....................

const Left = styled.div`
  ${tw`
   h-full
   
   flex
   justify-end

 `}
`;

const ImageBoxBig = styled.div`
  width: 320px;
  ${tw`
    h-full
    rounded-3xl
    relative
 `};
`;
