import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const PrimaryBtn = ({ text }) => {
  return (
    <Wrapper>
      <A>{text}</A>
    </Wrapper>
  );
};

export default PrimaryBtn;

const Wrapper = styled.div`
  filter: drop-shadow(0px 5px 10px rgba(114, 48, 218, 0.5));
  ${tw`
    relative
 `}
`;

const A = styled.a`
  padding: 10px 40px;
  ${tw`
   uppercase
   bg-purple-600
   rounded-full
   text-gray-100
   font-poppins
   font-medium
 `}
`;
