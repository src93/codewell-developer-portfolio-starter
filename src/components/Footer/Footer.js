import React from 'react';
import Github from 'resources/images/Social-Icons/Github.svg';
import LinkedIn from 'resources/images/Social-Icons/LinkedIn.svg';
import Twitter from 'resources/images/Social-Icons/Twitter.svg';
import {
  ContainerIcons,
  ContainerImage,
  FooterStyled,
  CustomParagraph,
  Image
} from './FooterStyles';

export const Footer = () => {
  return (
    <FooterStyled>
      <CustomParagraph>Johnathan Speeter</CustomParagraph>
      <ContainerIcons>
        <ContainerImage>
          <Image src={Github} alt='Github' />
        </ContainerImage>
        <ContainerImage>
          <Image src={LinkedIn} alt='LinkedIn' />
        </ContainerImage>
        <ContainerImage>
          <Image src={Twitter} alt='Twitter' />
        </ContainerImage>
      </ContainerIcons>
    </FooterStyled>
  );
}