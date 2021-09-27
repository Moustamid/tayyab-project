import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../layout';

import {
  HeroScreen,
  AboutScreen,
  ServicesScreen,
  ProductScreen,
  SubscribeScreen,
  TestaScreen,
  BlogScreen,
} from '../screens/landing';

const index = () => {
  return (
    <Layout>
      <HeroScreen />
      <AboutScreen />
      <ServicesScreen />
      <ProductScreen />
      <SubscribeScreen />
      <TestaScreen />
      <BlogScreen />
    </Layout>
  );
};

export default index;
