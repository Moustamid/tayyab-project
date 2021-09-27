import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const TestamonialCard = () => {
  return (
    <Card>
      <div className="flex flex-row ">
        <ImageBox>
          <StaticImage
            as="div"
            className="overflow-hidden"
            imgClassName="w-full h-full rounded-3xl"
            objectFit
            placeholder="tracedSVG"
            src="../../assets/avatar1.png"
            alt="box1"
          />
        </ImageBox>
        <div className="flex flex-col">
          <h2 className="font-poppins font-semibold">Amy Fait</h2>
          <h3 className="font-roboto font-light text-gray-400">@a.honor</h3>
        </div>
      </div>
      <div className="flex-grow py-6">
        <Text>
          Great talents are the most lovely and often the #most dangerous fruits
          on the tree of humanity
        </Text>
        <span className="block text-gray-400">18 oct 2021</span>
      </div>
    </Card>
  );
};

export default TestamonialCard;

const Card = styled.section`
  height: 260px;
  width: 360px;
  ${tw`
  shadow-xl
  relative

  flex
  flex-col


  p-8
  justify-self-center

 `};
`;

const ImageBox = styled.div`
  ${tw`
   mr-5

 `};
`;

const Text = styled.p`
  ${tw`
   mb-3.5
   font-poppins
 `};
`;
