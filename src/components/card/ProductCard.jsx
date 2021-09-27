import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const ProductCard = () => {
  return (
    <Card>
      <UperSection>
        <ImageBox>
          <StaticImage
            as="div"
            className="overflow-hidden"
            imgClassName="w-full h-full rounded-3xl"
            objectFit
            placeholder="tracedSVG"
            src="../../assets/images/products/p1.png"
            alt="box1"
          />
        </ImageBox>
      </UperSection>
      <LowerSection>
        <SubHeader>Subtitle</SubHeader>
        <Header>
          Fidelity first.See More
          <snap className="block">Than ever before</snap>
        </Header>
        <Text>
          Lorem ipsum dolor sit amet, Vestibulum egestas massa ipsum, eget
        </Text>
      </LowerSection>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  height: 400px;
  min-width: 280px;
  ${tw`
    cursor-pointer
    relative 
    shadow-lg
 `}
`;

const UperSection = styled.div`
  min-width: 280px;
  height: 300px;
  transition: 0.5s;
  ${tw`
  bg-gray-300
  relative

  flex
  justify-center
  items-center

 `};
`;

const ImageBox = styled.div`
  width: 150px;
  height: 170px;
  ${tw`
  
 `};
`;

const LowerSection = styled.div`
  height: 100px;
  top: 300px;
  ${tw`
   absolute
   left-0
   flex
   flex-col
   overflow-hidden
   px-6
   py-1.5
  
 `}
`;

const SubHeader = styled.h3`
  ${tw`
   font-roboto
   text-PrimaryPurple
   font-medium
   text-sm
   tracking-wider
   mt-2.5
   mb-1.5


 `}
`;

const Header = styled.h2`
  ${tw`
   font-poppins
   text-gray-800
   font-semibold
   text-lg
   tracking-wide
   leading-snug
   mb-2 
 `}
`;

const Text = styled.p`
  width: 80%;
  ${tw`
   font-roboto
   text-gray-400
   font-normal
   text-base



   w-full
   lg:w-4/5
   px-2
   lg:px-0
   
 `}
`;
