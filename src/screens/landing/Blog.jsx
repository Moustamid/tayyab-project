import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { BlogCard } from '../../components/card';

const Blog = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <SubHeader>Lates Blogs</SubHeader>
        <Header>Enjoy reading our monthly content </Header>
      </div>
      <Wrapper>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Wrapper>
    </Section>
  );
};

export default Blog;

const Section = styled.section`
  ${tw`
   pt-20
   pb-36
   w-full
   relative
   overflow-hidden 
   

 `};
`;

const Wrapper = styled.div`
  ${tw`
   container
   mx-auto
   grid
   grid-cols-3
   gap-2
 `};
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
