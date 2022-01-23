import React from 'react';
import {
  Title,
  ContainerImage,
  Image,
  ListImages,
  CustomParagraph,
  Section
} from './FirstSectionStyles';

import Morgan from 'resources/images/Logos/Morgan.svg';
import Samsung from 'resources/images/Logos/Samsung.svg';
import Tinder from 'resources/images/Logos/Tinder.svg';
import Verizon from 'resources/images/Logos/Verizon.svg';
import Visa from 'resources/images/Logos/Visa.svg';
import Walmart from 'resources/images/Logos/Walmart.svg';

export const FirstSection = () => {
  return (
    <Section>
      <Title>Helpding companies build better, scalable software</Title>
      <CustomParagraph>Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook and more.</CustomParagraph>
      <ListImages>
        <li>
          <ContainerImage width={'5rem'}>
            <Image src={Morgan} alt='Morgan' />
          </ContainerImage>
        </li>
        <li>
          <ContainerImage width={'5rem'}>
            <Image src={Samsung} alt='Samsung' />
          </ContainerImage>
        </li>
        <li>
          <ContainerImage width={'5rem'}>
            <Image src={Tinder} alt='Tinder' />
          </ContainerImage>
        </li>
        <li>
          <ContainerImage width={'5rem'}>
            <Image src={Verizon} alt='Verizon' />
          </ContainerImage>
        </li>
        <li>
          <ContainerImage width={'5rem'}>
            <Image src={Visa} alt='Visa' />
          </ContainerImage>
        </li>
        <li>
          <ContainerImage width={'5rem'}>
            <Image src={Walmart} alt='Walmart' />
          </ContainerImage>
        </li>
      </ListImages>
    </Section>
  );
}