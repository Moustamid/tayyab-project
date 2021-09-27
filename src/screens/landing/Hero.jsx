import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import { PrimaryBtn } from '../../components/button';

const Hero = () => {
  return (
    <Section>
      {/* ------------------------------------  Left Side ------------------------------------  */}
      <Left>
        <HeaderContent>
          <Header>
            Find your <HeaderSpan>Best Shape</HeaderSpan>
          </Header>
          <SubHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.
          </SubHeader>
          <PrimaryBtn text="read more" />
        </HeaderContent>
        <Blur>
          <StaticImage
            as="div"
            className="overflow-hidden"
            imgClassName="w-full h-full rounded-3xl"
            objectFit
            placeholder="tracedSVG"
            src="../assets/blur/b1.svg"
            alt="box1"
          />
        </Blur>
      </Left>
      {/* ------------------------------------  Right Side ------------------------------------  */}
      <Right>
        <ImageContainer>
          <Imagerow1>
            <ImageBox1>
              <StaticImage
                as="div"
                className="overflow-hidden"
                imgClassName="w-full h-full rounded-3xl"
                objectFit
                placeholder="tracedSVG"
                src="../../assets/images/hero/h1.png"
                alt="box1"
              />
            </ImageBox1>
            <ImageBox2>
              <Text1>2021 Best Products</Text1>
            </ImageBox2>
          </Imagerow1>

          <Imagerow2>
            <ImageBox3>
              <StaticImage
                as="div"
                className="overflow-hidden"
                imgClassName="w-full h-full rounded-3xl"
                objectFit
                placeholder="tracedSVG"
                src="../../assets/images/hero/h2.png"
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
                src="../../assets/images/hero/h3.png"
                alt="box1"
              />
            </ImageBox4>
          </Imagerow2>

          <Imagerow3>
            <ImageBox5>
              <Text2>Sale up to 60%</Text2>
            </ImageBox5>
            <ImageBox6>
              <StaticImage
                as="div"
                className="overflow-hidden"
                imgClassName="w-full h-full rounded-3xl"
                objectFit
                placeholder="tracedSVG"
                src="../../assets/images/hero/h4.png"
                alt="box1"
              />
            </ImageBox6>
            <ImageBox7>
              <StaticImage
                as="div"
                className="overflow-hidden"
                imgClassName="w-full h-full rounded-3xl"
                objectFit
                placeholder="tracedSVG"
                src="../../assets/images/hero/h5.png"
                alt="box1"
              />
            </ImageBox7>
          </Imagerow3>
        </ImageContainer>
      </Right>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  height: 85vh;
  ${tw`
     w-full
     grid
     md:grid-cols-2
      

 `}
`;

// . blur

const Blur = styled.div`
  width: 800px;
  height: 800px;
  top: 0px;
  left: 0%;
  ${tw`
    absolute
   `};
`;

// . ....................  Left Section  ....................

const Left = styled.div`
  ${tw`
  relative

 `}
`;

const HeaderContent = styled.div`
  top: 30%;
  left: 15%;
  ${tw`
  absolute
  
 `};
`;

const Header = styled.h1`
  ${tw`
   font-poppins
   font-semibold
   text-6xl
   not-italic
   tracking-tight
   leading-tight
   text-gray-800
   mb-2
 `}
`;

const HeaderSpan = styled.span`
  ${tw`
   block
   
 `}
`;

const SubHeader = styled.h3`
  width: 60%;
  ${tw`
   font-roboto
   text-gray-300
   mb-10 
 `}
`;

// . .................... Right Section ....................
const Right = styled.div`
  ${tw`
  flex
  justify-center
  items-center
  relative

 `}
`;

const ImageContainer = styled.div`
  ${tw`
    hidden
    xl:grid
    xl:grid-cols-3
    xl:grid-rows-1

    

    lg:w-4/5
    2xl:w-3/5
  
    mt-9

 `};
`;

const Imagerow1 = styled.div`
  height: 75%;
  ${tw`
  lg:grid
  lg:grid-rows-2
  lg:gap-4
  
  justify-self-center
  self-end
 `}
`;

const Imagerow2 = styled.div`
  ${tw`
  lg:grid
  lg:grid-rows-2
  lg:gap-4
  justify-self-center
  self-center
 `}
`;

const Imagerow3 = styled.div`
  ${tw`
  lg:grid
  lg:grid-rows-3
  lg:gap-4
  justify-self-center
 `}
`;

const ImageBox1 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
    rounded-3xl
    overflow-hidden
    self-end
 `};
`;

const ImageBox2 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
    rounded-3xl
    overflow-hidden
    bg-PrimaryPurple
    self-start

    relative
 `}
`;

const ImageBox3 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`

    rounded-3xl
    overflow-hidden
  
 `}
`;

const ImageBox4 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`

    rounded-3xl
    overflow-hidden
    self-end
 `}
`;

const ImageBox5 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`

    rounded-3xl
    overflow-hidden
    bg-PrimaryPurple
    self-end

    relative
 `}
`;

const ImageBox6 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`

    rounded-3xl
    overflow-hidden
    self-center
    
 `}
`;

const ImageBox7 = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
    self-start
    rounded-3xl
    overflow-hidden
 `}
`;

const Text1 = styled.h2`
  top: 30%;
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

const Text2 = styled.h2`
  top: 70%;
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
