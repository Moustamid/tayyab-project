import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const HeroBlur = () => {
  return (
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
  );
};

export default HeroBlur;

const Blur = styled.div`
  width: 800px;
  height: 800px;
  top: 0px;
  left: 0%;
  ${tw`
    absolute
   `};
`;
