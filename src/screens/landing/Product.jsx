import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { ProductCard } from '../../components/card';

const Product = () => {
  const [pressed, setPressed] = useState(false);
  const [startx, setStartx] = useState(null);
  const [Xposition, setXposition] = useState(null);

  //- 1
  useEffect(() => {
    let slider = document.querySelector('.slider');
    let innerSlider = document.querySelector('.slider-inner');

    const mousedown = (e) => {
      setPressed(true);
      setStartx(e.offsetX - innerSlider.offsetLeft);
      slider.style.cursor = 'grabbing';
    };

    slider.addEventListener('mousedown', (e) => mousedown(e));

    return () => slider.removeEventListener('mousedown', mousedown);
  }, [pressed, startx]);

  //- 2
  useEffect(() => {
    let slider = document.querySelector('.slider');

    const mouseenter = () => {
      slider.style.cursor = 'grab';
    };

    slider.addEventListener('mouseenter', mouseenter);

    return () => slider.removeEventListener('mouseenter', mouseenter);
  }, []);

  //- 3
  useEffect(() => {
    let slider = document.querySelector('.slider');

    const mouseup = () => {
      slider.style.cursor = 'grab';
    };

    slider.addEventListener('mouseup', mouseup);
  }, []);

  //- 4
  useEffect(() => {
    const mouseup = () => {
      setPressed(false);
    };

    window.addEventListener('mouseup', mouseup);
  }, []);

  //-5
  useEffect(() => {
    let slider = document.querySelector('.slider');
    let innerSlider = document.querySelector('.slider-inner');

    const check = () => {
      let outer = slider.getBoundingClientRect();
      let inner = innerSlider.getBoundingClientRect();

      if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';
      } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
    };

    const mousemove = (e) => {
      if (!pressed) return;
      e.preventDefault();

      setXposition(e.offsetX);
      innerSlider.style.left = `${Xposition - startx}px`;

      check();
    };

    slider.addEventListener('mousemove', mousemove);
  }, [Xposition, startx]);

  return (
    <ProductSection>
      <HeaderSection>
        <SubHeader>Our Products</SubHeader>
        <Header>
          We are the best fitness
          <span className="block">provider in Mexico City</span>
        </Header>
      </HeaderSection>
      <Section className="slider">
        <Slider className="slider-inner">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </Section>
    </ProductSection>
  );
};

export default Product;

const ProductSection = styled.section`
  ${tw`

 `};
`;

const HeaderSection = styled.section`
  ${tw`
   container
   mx-auto
   py-10
   pb-10
 `};
`;

const Section = styled.section`
  height: 70vh;
  ${tw`
   w-full
   relative
   overflow-hidden 
 `};
`;

const Slider = styled.div`
  pointer-events: none;
  transition: 0s ease-in;
  ${tw`
    absolute
    top-0
    left-0
    h-full

    grid
    grid-flow-col
    gap-8


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
