import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const BlogCard = () => {
  return (
    <Card>
      <ImageBox>
        <StaticImage
          as="div"
          className="overflow-hidden"
          imgClassName="w-full h-full rounded-3xl"
          objectFit
          placeholder="tracedSVG"
          src="../../assets/currentblog/b1.jpg"
          alt="box1"
        />
      </ImageBox>
      <SubHeader>
        proteina :
        <span className="ml-2.5 text-gray-400 font-light text-sm">
          5 min read
        </span>
      </SubHeader>
      <Header>Simple proteina Recipes to boost your metabolism </Header>
    </Card>
  );
};

export default BlogCard;

const Card = styled.div`
  width: 360px;
  ${tw`
  justify-self-center
 `};
`;

const ImageBox = styled.div`
  height: 260px;
  ${tw`
   
 `};
`;

const SubHeader = styled.h3`
  ${tw`
   font-roboto
   text-pink-500
   font-medium
   text-base
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
   text-xl
   leading-snug

   px-2
   lg:px-0


   mb-8
 `}
`;
