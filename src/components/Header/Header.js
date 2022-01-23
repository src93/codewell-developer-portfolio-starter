import React from 'react';
import hamburguer from 'resources/images/hamburger.svg';
import {
  HeaderStyled,
  Nav,
  ListLinks,
  Link,
  CustomButton,
  CustomContainerImage,
  Image,
  HeaderThree
} from './HeaderStyles';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderThree className='title'>Johnathan Speeter</HeaderThree>
      <Nav>
        <ListLinks>
          <Link>Articles</Link>
          <Link>Chats</Link>
          <Link>Awards</Link>
          <Link>About</Link>
        </ListLinks>
      </Nav>
      <CustomButton>Get in touch</CustomButton>
      <CustomContainerImage width={'1.5rem'}>
        <Image src={hamburguer} alt='hamburguer'/>
      </CustomContainerImage>
    </HeaderStyled>
  );
}